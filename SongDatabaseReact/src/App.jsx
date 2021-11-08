import User from "./pages/user"
import Home from './pages/home';
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  console.log(process.env)
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/user' component={User} />
    </Switch>
    </div>
  );
}

export default App;
