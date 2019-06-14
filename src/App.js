import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // search GitHub users
  searchUsers = async text => {
    this.setState({
      loading: true
    });

    const res = await axios.get(
      `http://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  // Set alert if form is empty
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });

    setTimeout(
      () =>
        this.setState({
          alert: null
        }),
      4000
    );
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
