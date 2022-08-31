import createCustomCursor from './components/cursor/cursor';
import createSlider from './components/Slider/Slide';
import renderContent from './utils/render';
import { INITIAL_SERVICE_TYPE } from './utils/utils';

const App = ():void => {
  renderContent(INITIAL_SERVICE_TYPE);
  createSlider();
};

export default App;
