import { Route, Switch } from 'react-router-dom';
import './App.css';
import Perfumes from './Components/Perfumes/Perfumes';
import { ProductContextProvider } from './hooks/context/ProductContext';
import Cosmetics from "./Components/Cosmetics/Cosmetics"




function App() {
  return (
    <div className="App">
      <ProductContextProvider>
      <Switch>
        <Route exact path="/perfumes" component={Perfumes} />
        <Route exact path="/cosmetics" component={Cosmetics} />
      </Switch>
      </ProductContextProvider>
    </div>
  );
}

export default App;
