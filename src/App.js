import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Service from "./Pages/Service/Service";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import MyService from "./Components/MyService/MyService";
import AuthProvider  from "./Context/AuthProvider";
import Destination from "./Components/Destination/Destination";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       <Header></Header>
   
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/manageAllOrders'>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <PrivateRoute path='/bookingService/:serviceId'>
          <Service></Service>
          </PrivateRoute>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path='/myservices'>
            <MyService></MyService>
          </Route>
          <Route path='/addservice'>
            <AddService></AddService>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
