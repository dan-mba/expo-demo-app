import {Dimensions} from 'react-native';

export function responsiveFontSize(value, ratio = 0.5) {
  const defaultHeight = 736; // Height of Iphone 7
  const { height } = Dimensions.get('window');

  // Create offset to allow the ratio from the default tayout to not be 1 to 1
  const offset = (((height / defaultHeight) - 1) * ratio) + 1;

  return value * offset;
}