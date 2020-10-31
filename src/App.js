// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages'
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
