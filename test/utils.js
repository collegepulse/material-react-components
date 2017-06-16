import {mount, shallow} from 'enzyme';
import {unmountComponentAtNode} from 'react-dom';

export function createWrapper(fn) {
  const attachTo = window.document.createElement('div');
  window.document.body.insertBefore(attachTo, window.document.body.firstChild);

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
