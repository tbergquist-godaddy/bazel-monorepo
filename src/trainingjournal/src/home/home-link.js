// @flow

import { type Node } from 'react';
import { Link } from '@tbergq/router';
import { Card, Box, Heading } from '@tbergq/components';
import { MdChevronRight } from 'react-icons/md';

import './home-link.css';

type Props = {
  +to: string,
  +text: string,
  +img?: string,
  +webpP?: string,
};

export default function HomeLink({ to, text, img, webpP }: Props): Node {
  return (
    <Link to={to} className="HomeLink__card-link">
      <Card className="HomeLink__card">
        {img != null && (
          <picture>
            <source srcSet={webpP} type="image/webp" />
            <source srcSet={img} type="image/jpeg" />
            <img src={img} alt="" className="HomeLink__img" />
          </picture>
        )}
        <Box
          className="HomeLink__Box"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading level="h2" as="h5">
            {text}
          </Heading>
          <MdChevronRight size={24} />
        </Box>
      </Card>
    </Link>
  );
}
