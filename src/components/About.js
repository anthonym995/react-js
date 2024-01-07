import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    console.log("Parent component Render");
    return (
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-heading">About Us</h1>
          <p className="about-us-description">
            Welcome to our company! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi.
          </p>
          <p className="about-us-description">
            We are dedicated to providing high-quality products and excellent
            service to our customers. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="about-us-profile">
          <ProfileClass val={"Class Components Rending Method"} />
        </div>
      </div>
    );
  }
}

export default About;
