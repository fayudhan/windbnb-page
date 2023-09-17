import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GuestsSelect = ({ onGuestsChange }) => {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  useEffect(() => {
    if (typeof onGuestsChange === "function") {
      onGuestsChange(adultsCount + childrenCount);
    }
  }, [adultsCount, childrenCount]);

  const increaseAdultsCount = () => {
    setAdultsCount(adultsCount + 1);
  };

  const decreaseAdultsCount = () => {
    if (adultsCount > 0) {
      setAdultsCount(adultsCount - 1);
    }
  };

  const increaseChildrenCount = () => {
    setChildrenCount(childrenCount + 1);
  };

  const decreaseChildrenCount = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  return (
    <div className="space-y-8 lg:p-8">
      <div className="space-y-4">
        <div>
          <p className="text-gray-800 font-muli text-[0.875rem] font-semibold">
            Adults
          </p>
          <p className="text-gray-400 font-muli text-[0.875rem] font-normal">
            Age 13 or above
          </p>
        </div>
        <div className="flex">
          <span
            className="rounded-[0.25rem] border border-gray-400 px-2 cursor-pointer"
            onClick={decreaseAdultsCount}
          >
            -
          </span>
          <p className="mx-2">{adultsCount}</p>
          <span
            className="rounded-[0.25rem] border border-gray-400 px-2 cursor-pointer"
            onClick={increaseAdultsCount}
          >
            +
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-800 font-muli text-[0.875rem] font-semibold">
            Children
          </p>
          <p className="text-gray-400 font-muli text-[0.875rem] font-normal">
            Age 2 - 12
          </p>
        </div>
        <div className="flex">
          <span
            className="rounded-[0.25rem] border border-gray-400 px-2 cursor-pointer"
            onClick={decreaseChildrenCount}
          >
            -
          </span>
          <p className="mx-2">{childrenCount}</p>
          <span
            className="rounded-[0.25rem] border border-gray-400 px-2 cursor-pointer"
            onClick={increaseChildrenCount}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

GuestsSelect.propTypes = {
  onGuestsChange: PropTypes.func.isRequired,
};

export default GuestsSelect;
