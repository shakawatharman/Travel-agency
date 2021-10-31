import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Service from "./Pages/Service/Service";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import ManageService from "./Components/ManageService/ManageService";
import MyService from "./Components/MyService/MyService";
import AuthProvider  from "./Context/AuthProvider";
import Footer from "./Components/Footer/Footer";


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
          <Route path='/manageservice'>
            <ManageService></ManageService>
          </Route>
          <Route path='/bookingService/:serviceId'>
          <Service></Service>
          </Route>
          <Route path='/myservices'>
            <MyService></MyService>
          </Route>
          <Route>
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
