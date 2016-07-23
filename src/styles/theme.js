import {
  fullWhite
} from 'material-ui/styles/colors';

// definitions of project colors
export const colors = {
  mainBackground: fullWhite
};

// fonts helper
export const fonts = {
  weight: {
    thin: 300,
    normal: 400,
    thick: 500,
    bold: 600
  },
  size: {
    xxs: 12,
    xs: 14,
    s: 16,
    m: 18,
    l: 24,
    xl: 28,
    xxl: 36,
    xxxl: 48
  }
};

// overwrite material-ui theme here
export default {
  palette: {

  },
  appBar: {
    color: colors.mainBackground
  }
};
