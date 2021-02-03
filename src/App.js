import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';


//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>

    
  );
}

export default App;
