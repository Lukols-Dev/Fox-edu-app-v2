import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './Components/Auth/AuthProvider';
import PrivateRoute from './Components/Route/PrivateRoute';
import About from './Screen/About/About';
import ContactForm from './Screen/Contact/ContactForm';
import Course from './Screen/Course/Course';
import Dashboard from './Screen/Dashboard/Dashboard';
import Home from './Screen/Home/Home';
import Login from './Screen/Login/Login';
import Register from './Screen/Register/Register';
import { ProductsContextProvider } from './Screen/Course/ProductsContext';
import Test from './Screen/Test/Test';

function App() {
  return (
    <ProductsContextProvider>
    <AuthProvider>
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/course" component={Course}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/test" component={Test}/>
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
      </Router>
    </AuthProvider>
    </ProductsContextProvider>
  );
}

export default App;
