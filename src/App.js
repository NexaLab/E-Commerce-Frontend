import { Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './Components/Test/Test';

function App() {
  return (
    <div className='App'>
    <Switch>
        <Route exact path="/" component={Test} />
    </Switch>
    </div>
  );
}

export default App;
