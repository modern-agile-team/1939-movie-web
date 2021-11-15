import React from 'react';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../imageData';

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
};

const ImageDiv = styled(ImageList)`
  margin: 0 auto;
  margin-top: 1em;
  border-radius: 3px;
`;

const Container = styled.div`
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 3rem;
  text-align: center;
`;

export const StillCut = () => {
  return (
    <div>
      <Container>
        <Title>스틸컷</Title>
        <ImageDiv
          sx={{ width: `90vw`, height: '70vh' }}
          variant="quilted"
          cols={4}
          rowHeight={300}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 1024, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageDiv>
      </Container>
    </div>
  );
};
