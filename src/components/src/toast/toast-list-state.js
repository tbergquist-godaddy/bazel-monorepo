// @flow

import { useCallback, useMemo } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import shortid from 'shortid';

export type Config = {
  +text: string,
  +type?: 'danger' | 'success',
  +timeout?: number,
};

const defaultToast = {
  isVisible: false,
  text: null,
  type: 'success',
  timeout: 5000,
  id: '',
};

type Toasts = $ReadOnlyArray<typeof defaultToast>;

const toastListState = atom<Toasts>({
  key: 'toasts',
  default: [],
});

function useToastListState(): Toasts {
  const toasts = useRecoilValue(toastListState);
  return toasts;
}

type UseToastAction = {
  +setVisible: (string) => void,
  +hide: (string) => void,
  +remove: (string) => void,
};

function useToastActions(): UseToastAction {
  const setToastList = useSetRecoilState(toastListState);
  const setVisible = useCallback(
    (id: string) => {
      setToastList((toasts) => {
        return toasts.map((toast) => {
          if (toast.id === id) {
            return {
              ...toast,
              isVisible: true,
            };
          }
          return toast;
        });
      });
    },
    [setToastList],
  );

  const hide = useCallback(
    (id: string) => {
      setToastList((toasts) =>
        toasts.map((toast) => {
          if (toast.id === id) {
            return {
              ...toast,
              isVisible: false,
            };
          }
          return toast;
        }),
      );
    },
    [setToastList],
  );

  const remove = useCallback(
    (id: string) => {
      setToastList((toasts) => toasts.filter((toast) => toast.id !== id));
    },
    [setToastList],
  );

  const state = useMemo(
    () => ({
      setVisible,
      hide,
      remove,
    }),
    [setVisible, hide, remove],
  );
  return state;
}

function useShowToast(): (Config) => void {
  const setToastList = useSetRecoilState(toastListState);
  const showToast = useCallback(
    (config: Config) => {
      setToastList((toasts) => {
        return [
          ...toasts,
          {
            ...defaultToast,
            ...config,
            id: shortid.generate(),
          },
        ];
      });
    },
    [setToastList],
  );
  return showToast;
}

export { useToastListState, useShowToast, useToastActions };
