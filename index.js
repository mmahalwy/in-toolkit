export const inWindow = (inside, outside) => {
  if (typeof window !== 'undefined') {
    inside();
  } else {
    outside();
  }
};

export const inIframe = (inside, outside) =>
  inWindow(() => {
    if (window.top !== window) {
      inside();
    } else {
      outside();
    }
  }, outside);
