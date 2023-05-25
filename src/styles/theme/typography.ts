import './fonts.css';

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  xs,
  sm,
  md,
  lg,
}: {
  xs?: number;
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    ...(xs && {
      '@media (max-width:599px)': {
        fontSize: pxToRem(xs),
      },
    }),
    '@media (min-width:600px) and (max-width:899px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px) and (max-width:1199px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = 'Roboto Flex, sans-serif';

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 700,
  fontWeightBold: 800,
  h1: {
    fontWeight: 800,
    lineHeight: '85%',
    fontSize: pxToRem(244),
    ...responsiveFontSizes({ xs: 70, sm: 150, md: 200, lg: 244 }),
  },
  h2: {
    fontWeight: 200,
    lineHeight: '85%',
    fontSize: pxToRem(244),
    ...responsiveFontSizes({ xs: 70, sm: 150, md: 200, lg: 244 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 18, sm: 19, md: 20, lg: 22 }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 18, sm: 19, md: 20, lg: 22 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
} as const;
