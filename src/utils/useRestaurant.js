import { useState, useEffect } from "react";
import { FETCH_URL } from "../constant";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [listItems, setListItems] = useState({});
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(FETCH_URL + resId);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setListItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  return [restaurant, listItems];
};

export default useRestaurant;
