// packages/my-ui-demo/app.js
import { createApp } from './node_modules/my-ui-library';

const appTemplate = ({ state }) =>
  h('div', [
    h('h1', state.count),
    h('button', { on: { click: handleClick } }, 'Add'),
  ]);

const app = createApp(appTemplate, {
  containerId: 'app',
  props: {},
  state: { count: 0 },
  onMount: () => console.log('Component mounted'),
  onStateChange: (newState) => console.log('State changed', newState),
});

function handleClick() {
  app.updateState({ count: app.state.count + 1 });
}
