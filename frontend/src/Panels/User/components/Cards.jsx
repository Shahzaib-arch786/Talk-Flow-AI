import React from "react";

const Cards = ({ icon, title, description }) => {
  return (
    <div>
      <div className="card w-full bg-gray-900 card-md shadow-sm border border-gray-600 hover:scale-105 transition-transform duration-300">
        <div className="card-body">
          {icon}
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
