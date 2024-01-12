import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className=" mx-auto flex flex-col justify-center items-center ">
          <div className="max-w-[600px] text-center">
            <h1 className="text-4xl text-[#3498db] mb-5">About Us</h1>
            <p className="text-xl text-[#555] mb-4">
              Welcome to our company! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi.
            </p>
            <p className="text-xl text-[#555] mb-4">
              We are dedicated to providing high-quality products and excellent
              service to our customers. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="w-full  flex justify-center">
            <ProfileClass val={"Class Components Rending Method"} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
