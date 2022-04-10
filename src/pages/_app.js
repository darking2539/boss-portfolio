import Theme from '../styles/themes/theme';
import { Provider } from 'react-redux';
import store from './../redux/store';

function App({ Component }) {
  return (
    
    <Provider store={store}>
      <Theme>
        <Component />
      </Theme>
    </Provider>
  
  );
}
 
export default App;