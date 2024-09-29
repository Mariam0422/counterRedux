import Counter from './counter';
import { Provider } from "react-redux";
import { store } from './counter/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
