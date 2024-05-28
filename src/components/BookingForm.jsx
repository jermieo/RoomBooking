import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { bookings } from "../Apis/Api";

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [formData, setFormData] = useState({
    classSection: state.hotel.classSection,
    roomeNumber: state.hotel.roomeNumber,
    price: state.hotel.price,
    checkInDate: "",
    checkOutDate: "",
    totalPrice: state.hotel.price, // Add totalPrice to formData state
  });

  // Function to calculate total price based on check-in and check-out dates
  const calculateTotalPrice = (checkInDate, checkOutDate, pricePerNight) => {
    if (!checkInDate || !checkOutDate) return 0;
    const daysDiff = Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
    return daysDiff > 0 ? pricePerNight * daysDiff : 0;
  };

  // Update formData and totalPrice whenever dates change
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...formData, [name]: value };

    // Calculate the total price if both dates are selected
    if (newFormData.checkInDate && newFormData.checkOutDate) {
      newFormData.totalPrice = calculateTotalPrice(
        newFormData.checkInDate,
        newFormData.checkOutDate,
        newFormData.price
      );
    }

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = { ...formData };

    // Uncomment the following lines to send the booking data to the server
    axios
      .post(bookings, bookingData)
      .then((response) => {
        toast(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        toast(error.response.data.message);
      });
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "grey",
        border: "2px solid red",
        borderRadius: "15px",
        marginTop: "40px",
        padding: "10px",
      }}
    >
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        Book a Room
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="classSection" className="form-label">
            Class:
          </label>
          <input
            type="text"
            className="form-control"
            name="classSection"
            value={formData.classSection}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="roomeNumber" className="form-label">
            Room Number:
          </label>
          <input
            type="text"
            className="form-control"
            name="roomeNumber"
            value={formData.roomeNumber}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price per Night:
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkInDate" className="form-label">
            Check-In Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkOutDate" className="form-label">
            Check-Out Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalPrice" className="form-label">
            Total Price:
          </label>
          <input
            type="text"
            className="form-control"
            name="totalPrice"
            value={formData.totalPrice}
            disabled
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
