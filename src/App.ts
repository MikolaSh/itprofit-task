import bubblesAnimation from './components/bubbles/bubbles';
import createCustomCursor from './components/cursor/cursor';
import renderContent from './utils/render';

const App = ():void => {
  renderContent('market');
  createCustomCursor();
  bubblesAnimation();
};

export default App;
