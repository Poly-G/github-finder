import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="github avatar"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit GitHub Profile
            </a>
            <ul>
              <li>{login && <Fragment>Username: {login}</Fragment>}</li>
              <li>{company && <Fragment>Company: {company}</Fragment>}</li>
              <li>{blog && <Fragment>Website: {blog}</Fragment>}</li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          {followers > 0 && (
            <div className="badge badge-primary">Followers: {followers}</div>
          )}
          {following > 0 && (
            <div className="badge badge-success">Following: {following}</div>
          )}
          {public_repos > 0 && (
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
          )}
          {public_gists > 0 && (
            <div className="badge badge-dark">Public Gist: {public_gists}</div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default User;