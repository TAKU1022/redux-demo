import {
  CLEAR,
  DIVIDE,
  EQUAL,
  INPUT_NUMBER,
  MINUS,
  MULTIPLY,
  PULS,
} from './types';

export const onNumberClick = (number: number) => ({
  type: INPUT_NUMBER,
  number,
});

export const onPlusClick = () => ({
  type: PULS,
});

export const onMinusClick = () => ({
  type: MINUS,
});

export const onMultiplyClick = () => ({
  type: MULTIPLY,
});

export const onDivideClick = () => ({
  type: DIVIDE,
});

export const onEqualClick = () => ({
  type: EQUAL,
});

export const onClearClick = () => ({
  type: CLEAR,
});
