export const Types = {
  LOADING_START: '@loader/LOADING_START',
  LOADING_END: '@loader/LOADING_END'
};

export function loadingStart () {
  return {
    type: Types.LOADING_START,
    isLoading: true
  };
}

export function loadingEnd () {
  return {
    type: Types.LOADING_END,
    isLoading: false
  };
}
