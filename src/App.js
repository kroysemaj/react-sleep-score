import { Provider } from 'react-redux';
import store from './store';
import SleepScore from './components/SleepScore';

const App = () => (
  <Provider store={store}>
    <SleepScore />
  </Provider>
);

export default App;
