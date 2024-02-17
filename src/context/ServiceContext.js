import { createContext } from "react";

const ServiceContext = createContext({
  serviceData: [
    {
      title: "Food Delivery Services",
      content:
        "Explore our convenient food delivery services that bring delicious meals to your doorstep. With a diverse menu and swift delivery, we strive to enhance your dining experience. Enjoy the ease of ordering, quality dishes, and timely service.",
    },
    {
      title: "Express Delivery",
      content:
        "Experience the speed of our express food delivery service. From order to your table, we prioritize efficiency without compromising on the taste and freshness of your favorite dishes.",
    },
    {
      title: "Variety at Your Fingertips",
      content:
        "Dive into a world of culinary delights with our extensive menu. From international cuisines to local favorites, our food delivery service offers a wide range of options to satisfy every palate and craving.",
    },
    {
      title: "Special Offers",
      content:
        "Discover exclusive discounts and promotions with our food delivery services. We believe in making your meals not only convenient but also affordable. Keep an eye out for special offers that add value to your dining experience.",
    },
    {
      title: "Customized Ordering",
      content:
        "Tailor your meals to perfection with our customized ordering options. Whether you have dietary preferences or specific cravings, our food delivery service allows you to create a personalized culinary experience.",
    },
    {
      title: "24/7 Availability",
      content:
        "Craving a late-night snack or an early morning breakfast? Our 24/7 food delivery service ensures that delicious meals are just a click away, anytime you desire. Enjoy the convenience of round-the-clock access to delectable dishes.",
    },
    {
      title: "Healthy Choices",
      content:
        "Prioritize your well-being with our selection of healthy menu choices. From fresh salads to nutrient-packed bowls, our food delivery service caters to those seeking a balanced and nourishing dining experience.",
    },
    {
      title: "Group Orders",
      content:
        "Planning a gathering? Simplify group orders with our food delivery service. Enjoy a variety of dishes that cater to different tastes, ensuring everyone in the group has a delightful dining experience.",
    },
    {
      title: "Contactless Delivery",
      content:
        "In response to current times, we offer contactless delivery options for added safety and peace of mind. Enjoy your favorite meals with the assurance of a secure and hygienic delivery experience.",
    },
  ],
});
ServiceContext.displayName = "ServiceContext";
export default ServiceContext;
