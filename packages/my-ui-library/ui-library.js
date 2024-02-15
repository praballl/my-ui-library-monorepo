// packages/my-ui-library/ui-library.js
import { init } from 'snabbdom/build/index';
// import { h } from 'snabbdom/build/package/h';
import { classModule } from 'snabbdom/build/modules/class';
import { propsModule } from 'snabbdom/build/modules/props';
import { styleModule } from 'snabbdom/build/modules/style';
import { eventListenersModule } from 'snabbdom/build/modules/eventlisteners';


const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

export function createApp(template, options) {
  let state = options.state || {};
  let vnode = template({ ...options.props, state });

  const container = document.getElementById(options.containerId);
  patch(container, vnode);

  if (options.onMount) {
    options.onMount();
  }

  return {
    updateState: (newState) => {
      state = { ...state, ...newState };
      const newVNode = template({ ...options.props, state });
      patch(vnode, newVNode);
      vnode = newVNode;
      if (options.onStateChange) {
        options.onStateChange(state);
      }
    },
  };
}
