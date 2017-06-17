import {mount, shallow} from 'enzyme';
import {unmountComponentAtNode} from 'react-dom';

export function createWrapper(fn) {
  const attachTo = window.document.createElement('div');
  const firstChild = window.document.body.firstChild;

  window.document.body.insertBefore(attachTo, firstChild);

  const wrapper = function enzymeWrapper(node) {
    return fn(node, { attachTo });
  };

  wrapper.cleanUp = () => {
    unmountComponentAtNode(attachTo);
    attachTo.parentNode.removeChild(attachTo);
  };

  return wrapper;
}

export function createMount() {
  return createWrapper(mount);
}

export function createShallow() {
  return createWrapper(shallow);
}

/* Slow tests down a little so we can view
 * the visual renders in BrowserStack
 */
export function createTest(test, timeout) {
  return function (done) {
    test.bind(this)();
    setTimeout(() => {
      done();
    }, timeout || 1000);
  };
}
