import Theme from '../styles/theme';
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