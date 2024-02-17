import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg ">
        <div className="mx-auto shadow-lg mb-10 px-3 text-lg">
          <h2 className="text-3xl font-semibold  text-center text-green-600 mt-4 mb-5">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our Food Delivery Service, where we strive to provide you
            with the best culinary experience right at your doorstep. Our
            mission is to deliver delicious and freshly prepared meals to your
            home or office, ensuring that you enjoy every bite.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            At our Food Delivery Service, we collaborate with local restaurants
            and chefs to bring you a diverse range of cuisines. Whether you're
            craving savory classics, exploring international flavors, or seeking
            healthy options, we've got you covered.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Our dedicated team works tirelessly to ensure that your orders are
            delivered promptly and with the utmost care. We prioritize quality,
            taste, and customer satisfaction in every meal we deliver.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4 pb-3">
            Thank you for choosing our Food Delivery Service. We look forward to
            serving you and making every meal a delightful experience.
          </p>
        </div>
        <ProfileClass />
      </div>
    );
  }
}

export default About;
