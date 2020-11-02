// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Details, NoMatch } from './pages'
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:countryName" component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
