import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

//pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

    
  );
}

export default App;
