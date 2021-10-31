import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App({ currentItem }) {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        {!currentItem ? (
          <Redirect to='/' />
        ) : (
          <Route exact path='/product/:id'>
            <ProductPage />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
