import React, { useEffect } from "react";
import "../App.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

const RoomList = () => {
  const hotellist = [
    {
      _id: 1,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with A/C and also have oneday(2500)",
      price: 2500,
      roomeNumber: 100,
      classSection: "first",
    },
    {
      _id: 2,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with A/C and also have oneday(2500)",
      price: 2500,
      roomeNumber: 101,
      classSection: "first",
    },
    {
      _id: 3,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with A/C and also have oneday(2500)",
      price: 2500,
      roomeNumber: 102,
      classSection: "first",
    },
    {
      _id: 4,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with A/C and also have oneday(2500)",
      price: 2500,
      roomeNumber: 103,
      classSection: "first",
    },
    {
      _id: 5,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with out A/C and also have oneday(1000)",
      price: 1000,
      roomeNumber: 104,
      classSection: "second",
    },
    {
      _id: 6,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with out A/C and also have oneday(1000)",
      price: 1000,
      roomeNumber: 105,
      classSection: "second",
    },
    {
      _id: 7,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with out A/C and also have oneday(1000)",
      price: 1000,
      roomeNumber: 106,
      classSection: "second",
    },
    {
      _id: 8,
      image: "src/assets/pexels-pixabay-258154.jpg",
      description: "with out A/C and also have oneday(1000)",
      price: 1000,
      roomeNumber: 107,
      classSection: "second",
    },
  ];
  const navigation = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("AuthorizationJwt")) {
      navigation("/login");
    }
  }, []);

  return (
    <div className="hotel-list-container">
      <h4>Available for Two Class</h4>
      <ul className="hotel-list">
        {hotellist.map((hotel) => (
          <li
            key={hotel._id}
            className="hotel-item"
            onClick={() => navigation("/bookingform", { state: { hotel } })}
          >
            <div>
              {hotel.classSection === "first" ? (
                <section>
                  <p style={{ textAlign: "center" }}>First Class</p>
                  <img src={hotel.image} alt="" className="hotel-image" />
                </section>
              ) : (
                <section>
                  <p style={{ textAlign: "center" }}>Second Class</p>
                  <img src={hotel.image} alt="" className="hotel-image" />
                </section>
              )}
            </div>
            <div className="hotel-details">
              <p>
                <b> description: {hotel.description}</b>
              </p>
              <b>Price: {hotel.price}</b>
              <p>
                <b>RomeNumber: {hotel.roomeNumber}</b>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
