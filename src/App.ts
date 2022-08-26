import createCustomCursor from './components/cursor/cursor';
import renderContent from './utils/render';

const App = ():void => {
  renderContent('market');
  createCustomCursor();
};

export default App;
