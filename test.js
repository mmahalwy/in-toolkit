import { inWindow, inIframe } from './index';

let inside;
let outside;

describe('inToolkit', () => {
  beforeEach(() => {
    inside = jest.fn();
    outside = jest.fn();
  });

  describe('inWindow', () => {
    test('with window', () => {
      inWindow(inside, outside);

      expect(inside).toHaveBeenCalled();
      expect(outside).not.toHaveBeenCalled();
    });

    test('without window', () => {
      const windowClone = global.window;
      delete global.window;

      inWindow(inside, outside);
      global.window = windowClone;

      expect(outside).toHaveBeenCalled();
      expect(inside).not.toHaveBeenCalled();
    });
  });

  describe('inIframe', () => {
    test('with window but no iframe', () => {
      inIframe(inside, outside);

      expect(outside).toHaveBeenCalled();
      expect(inside).not.toHaveBeenCalled();
    });

    test('without window', () => {
      const windowClone = global.window;
      delete global.window;

      inIframe(inside, outside);
      global.window = windowClone;

      expect(outside).toHaveBeenCalled();
      expect(inside).not.toHaveBeenCalled();
    });
  });
});
