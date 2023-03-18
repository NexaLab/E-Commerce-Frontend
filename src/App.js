import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className='App'>
    <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path ="/products" component={Products} />
    </Switch>
    </div>
  );
}

export default App;
