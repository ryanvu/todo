import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

//components
import Header from './components/Header/Header';
//pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

    
  );
}

export default App;
