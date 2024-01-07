export function searchFilter(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        return restaurant?.info?.name
            ?.toLowerCase()
            .includes(searchText?.toLowerCase());
    });
    return filterData;
}
