// @flow

import type { Node } from 'react';
import { Link } from '@tbergq/router';
import { LinkList } from '@tbergq/components';
import { graphql, useFragment } from 'react-relay/hooks';

import type { programsList_programs$key as Programs } from './__generated__/programsList_programs.graphql';
import AddProgram from '../add-program/add-program';

type Props = {
  +programs: ?Programs,
  +onClose: () => void,
  +isVisible: boolean,
};

export default function ProgramsList({ programs, onClose, isVisible }: Props): Node {
  const data = useFragment(
    graphql`
      fragment programsList_programs on Me {
        programs(first: 10) @connection(key: "programsList_programs") {
          __id
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    programs,
  );
  const linkListItems = (data?.programs?.edges ?? []).map((edge) => ({
    name: edge?.node?.name ?? '',
    id: edge?.node?.id ?? '',
  }));
  return (
    <>
      <LinkList
        items={linkListItems}
        renderItem={(className, program) => (
          <Link className={className} to={`/programs/${program.id}`}>
            {program.name}
          </Link>
        )}
      />
      <AddProgram connectionId={data?.programs?.__id} isVisible={isVisible} onClose={onClose} />
    </>
  );
}
