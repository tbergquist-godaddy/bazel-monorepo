// @flow

import { type Node, useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';

import Modal from './modal';

const AnimateIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Modal onClose={action('close')} isVisible={isVisible}>
      My content
    </Modal>
  );
};

export const Default = (): Node => (
  <Modal onClose={action('close')} isVisible={true}>
    my content
  </Modal>
);
export const Appear = (): Node => <AnimateIn />;

export const WithTitle = (): Node => (
  <Modal title="Modalidty" onClose={action('close')} isVisible={true}>
    my content
  </Modal>
);

export default {
  component: Modal,
  title: 'Modal',
};
