import { useParams } from "react-router-dom";
import { imgURL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import Spinner from "../utils/Shimmer";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, listItems] = useRestaurant(id);

  const {
    name,
    cloudinaryImageId,
    locality,
    cuisines,
    areaName,
    totalRatingsString,
  } = restaurant;

  return Object.values(restaurant).length === 0 ? (
    <Spinner />
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-col h-auto">
        <div className="w-full border p-3 rounded-lg flex items-center flex-row my-4 ">
          <div className="mr-4">
            <img
              className="w-40 h-40 rounded-lg"
              src={imgURL + cloudinaryImageId}
              alt={name}
            />
          </div>
          <div>
            <h2 className="text-[#333] mb-2 text-2xl">{name}</h2>
            <h3 className="text-[#555] mb-1">
              Cuisines: {cuisines?.join(", ")}
            </h3>
            <p className="text-[#777]">
              Locality: {locality}, {areaName}
            </p>
            <p className="text-[#777]">Ratings: {totalRatingsString}</p>
          </div>
        </div>
        <div className="w-full sticky top-0">
          <MenuCard listItems={listItems} />
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
