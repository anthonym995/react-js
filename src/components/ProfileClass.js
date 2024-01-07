import React from "react";
import Spinner from "./Spinner";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    try {
      const url = "https://api.github.com/users/anthonym995";
      const data = await fetch(url);
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log("Child component Render");
    const { name, avatar_url, bio, location } = this.state.userInfo;
    return (
      <>
        <div className="user-profile">
          <img className="avatar" src={avatar_url} alt={name} />
          <div className="user-info">
            <h2>{name}</h2>
            <h3>{bio}</h3>
            <p> {location}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileClass;
