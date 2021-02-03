import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

//context
import { AuthProvider } from './contexts/AuthContext';


//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PrivateRoute from './util/PrivateRoute';
import DetailForm from './pages/DetailForm/DetailForm';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/details" component={DetailForm}/>
          </Switch>
        <Footer />
      </AuthProvider>
    </Router>

    
  );
}

export default App;
