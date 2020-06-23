import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginAndReg from "./Raj/components/loginReg";
import { FooterCus } from "./Jigar/Components/Footer/Footer";
import { ForgotPassword } from "./Jigar/Components/ForgotPasword/ForgotPassword";
import { Feedback } from "./Jigar/Components/Feedback/Feeback";
import NavbarTemplate from "./Raj/components/navbarTemplate";

// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginAndReg}></Route>
      <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
      <Route exact path="/feedback" component={Feedback}></Route>
      <Route component={NavbarTemplate} />
    </Switch>
    <FooterCus />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
