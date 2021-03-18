import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { login } from "../src/redux/actions/auth";
import { logout } from "../src/redux/actions/auth";
import { register } from "../src/redux/actions/auth";
import { connect } from "react-redux";

// Components
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import MemberList from "./components/MemberList/MemberList";
import Auth from "./components/Auth/Auth";
import Activities from "./components/Activities/Activities";
import SingleActivity from "./components/Activities/SingleActivity";
import CreatePostForm from "./components/CreatePost/CreatePostForm";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


function App(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(props.userState);
  }, [props.userState]);

  return (
    <div>
      <Router>
        <Navbar user={user} logout={props.logout} />
        <Route exact path="/" component={Home} />
        <Route exact path="/members" component={MemberList} />
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/activities/:id" component={SingleActivity} />
        <Route exact path="/createpost" component={CreatePostForm} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: (user) => dispatch(logout(user)),
    register: (user) => dispatch(register(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

////  <CustomLayout> <Baseroute/>   </CustomLayout>
