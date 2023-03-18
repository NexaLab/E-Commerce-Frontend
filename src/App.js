import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/Products';
import Test from './Components/Test/Test';

function App() {
  return (
    <div className='App'>
    <Switch>
        <Route exact path="/" component={Test} />
        <Route exact path="/products" component={Products} />
    </Switch>
    </div>
  );
}

export default App;
