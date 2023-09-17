import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CardDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCard = JSON.parse(
    decodeURIComponent(queryParams.get("selectedCard"))
  );

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="card-detail">
      <img
        src={selectedCard.photo}
        alt={selectedCard.photo}
        className="w-full max-h-[40vh] lg:max-h-[70vh] object-cover object-bottom"
      />
      <h2>{selectedCard.city}</h2>
      <p>{selectedCard.title}</p>
      <button onClick={handleGoBack} className="font-bold">
        Go Back
      </button>
    </div>
  );
};

export default CardDetail;
