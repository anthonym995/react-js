import { createContext } from "react";

const AboutContext = createContext({
  reviews: [
    {
      name: "John Doe",
      date: "January 15, 2024",
      rating: 4.5,
      comment:
        "Excellent food and quick delivery. I love the variety of options available!",
    },
    {
      name: "Jane Smith",
      date: "January 14, 2024",
      rating: 5,
      comment:
        "The best food delivery service in town. Always on time and the food is delicious!",
    },
    {
      name: "Michael Johnson",
      date: "January 13, 2024",
      rating: 4,
      comment:
        "Great service and quality. The app is user-friendly, making ordering a breeze.",
    },
    {
      name: "Emily Davis",
      date: "January 12, 2024",
      rating: 5,
      comment:
        "'I've been using this service for months, and it never disappoints. Highly recommended!'",
    },
    {
      name: "Alex Turner",
      date: "January 11, 2024",
      rating: 3.5,
      comment:
        "Good overall, but sometimes the delivery takes longer than expected.",
    },
  ],
});

AboutContext.displayName = "AboutContext";

export default AboutContext;
