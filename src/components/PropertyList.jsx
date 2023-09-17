import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import hotelData from "./../data/stays.json";
import { useNavigate } from "react-router-dom";

const PropertyList = ({ searchParams }) => {
  const { selectedCity, guests } = searchParams;
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const filterHotels = () => {
      if (selectedCity === undefined && guests === undefined) {
        return hotelData;
      }

      return hotelData.filter((hotel) => {
        const isCityMatch =
          selectedCity === "" ||
          hotel.city.toLowerCase().includes(selectedCity.toLowerCase());

        const isGuestsMatch = guests === 0 || hotel.maxGuests >= guests;

        return isCityMatch && isGuestsMatch;
      });
    };
    const filteredHotels = filterHotels();
    setFilteredData(filteredHotels);
  }, [selectedCity, guests]);

  const handleCardClick = (id) => {
    const selected = hotelData[id];
    setSelectedCard(selected);

    navigate(
      `/card-detail/${id}?selectedCard=${encodeURIComponent(
        JSON.stringify(selected)
      )}`
    );
  };

  const clearSearch = () => {
    setFilteredData(hotelData);
    searchParams.selectedCity = undefined;
    searchParams.guests = undefined;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 md:py-14 mt-[10rem]">
      <div className="flex flex-row justify-between pb-6">
        <h1 className="text-sm md:text-2xl font-bold text-gray-900">
          Stays in Finland
        </h1>
        <p className="text-gray-700 font-montserrat text-sm font-medium">
          {filteredData.length} Stays{" "}
          {selectedCity !== undefined || guests !== undefined ? (
            <button onClick={clearSearch}>
              <strong>[Clear Search]</strong>
            </button>
          ) : (
            ""
          )}
        </p>
      </div>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 gap-y-8 md:gap-x-6">
          {filteredData.map((item, index) => (
            <PropertyCard
              key={index}
              id={index}
              data={item}
              onClick={handleCardClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-red-500">
          Sorry, the hotel you are looking for is not available at this time ://{" "}
          <button onClick={clearSearch}>
            <strong>Clear Search</strong>
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
