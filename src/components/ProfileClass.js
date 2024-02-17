import React from "react";
import AboutContext from "../context/AboutContext";

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-blue-500 h-12 w-12 flex items-center justify-center mr-4">
          <span className="text-white font-bold">{review.rating}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{review.name}</h3>
          <p className="text-gray-500">{review.date}</p>
        </div>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <AboutContext.Consumer>
          {({ reviews }) => (
            <div className="container mx-auto mt-8">
              <h1 className="text-3xl font-semibold  text-center text-green-600 mt-4 mb-5">
                Our Reviews
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}              
              </div>
            </div>
          )}
        </AboutContext.Consumer>
      </>
    );
  }
}

export default ProfileClass;
