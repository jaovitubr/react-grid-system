import styled, { css } from "styled-components";

interface ColumnAttrs {
  // mobileSm: number;
  // mobileMd: number;
  mobile: number;
  // tabletSm: number;
  // tabletMd: number;
  tablet: number;
  desktop: number;
}

export const Column = styled.div<ColumnAttrs>`
  background-color: #ff000073;
  --column-mobile: ${(attrs) => attrs.mobile || attrs.tablet || attrs.desktop || 1};
  --column-tablet: ${(attrs) => attrs.tablet || attrs.desktop || attrs.mobile || 1};
  --column-desktop: ${(attrs) => attrs.desktop || attrs.tablet || attrs.mobile || 1};
`;

interface RowAttrs {
  gap?: number | string;
  columns?: number;
}

export const Row = styled.div<RowAttrs>`
  background-color: yellow;
  display: grid;
  grid-column: 1 / -1;
  ${({ gap }) => gap && css`
    grid-gap: ${gap}px;
  `};
  ${({ columns }) => columns && css`
    grid-template-columns: repeat(${columns}, 1fr);
  `};
`;

interface GridAttrs {
  gap?: number | string;
  columns?: number;
  mobileMaxWidth?: number;
  tabletMaxWidth?: number;
}

export const Grid = styled.div<GridAttrs>`
  display: grid;
  grid-gap: ${({ gap = 0 }) => gap}px;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);

  & ${Row} {
    grid-gap: ${({ gap = 0 }) => gap}px;
    grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  }

  & ${Column} {
    @media
      only screen
      and (max-width: ${({ mobileMaxWidth = 680 }) => mobileMaxWidth}px) {
      grid-column: span var(--column-mobile);
    }

    @media
      only screen
      and (min-width: ${({ mobileMaxWidth = 681 }) => mobileMaxWidth + 1}px)
      and (max-width: ${({ tabletMaxWidth = 960 }) => tabletMaxWidth}px) {
      grid-column: span var(--column-tablet);
    }

    @media
      only screen
      and (min-width: ${({ tabletMaxWidth = 961 }) => tabletMaxWidth + 1}px) {
      grid-column: span var(--column-desktop);
    }
  }
`;