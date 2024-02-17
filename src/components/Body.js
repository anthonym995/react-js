import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Shimmer from "../utils/Shimmer";
import NoResultFound from "../utils/NoResult";
import { Link } from "react-router-dom";
import ErrorApi from "../utils/ErrorApi";
import { searchFilter } from "../utils/helper";
import { swiggyURL } from "../constant";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [error, setError] = useState(false);
  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(swiggyURL);
      const json = await data.json();
      const jsonPath1 =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const jsonPath2 =
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
        const path = jsonPath1 ? jsonPath1 : jsonPath2;
      setAllRestaurants(path);
      setFilteredRestaurants(path);

    } catch (err) {
      setError(true);
    }
  }

  return !isOnline ? (
    <ErrorApi msg={"Oops it seems to be your offline..."} />
  ) : error ? (
    <ErrorApi msg={"Error Unable to connect Network..."} />
  ) : allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="container mx-auto">
      <div className="flex items-center py-2">
        <input
          type="text"
          className="w-full py-2 px-4 border border-solid border-[#ccc] rounded-md mr-3 text-base"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          type="button"
          className=" flex items-center justify-center w-[150px] py-2 px-4 bg-[#4caf50] text-white border-none rounded-md cursor-pointer text-base hover:bg-[#45a049]"
          onClick={() => {
            const data = searchFilter(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          <FaSearch className="w-[14px] h-[14px] mr-2" />
          Search
        </button>
      </div>

      <div className="grid justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-3">
        {filteredRestaurants?.length === 0 ? (
          <NoResultFound />
        ) : (
          filteredRestaurants?.map((restaurant, i) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </main>
  );
};

export default Body;
