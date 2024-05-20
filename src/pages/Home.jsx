import React from "react";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <header className="header">
          <h5>Welcome to Rx Room Booking</h5>
        </header>
        <main className="main-content">
          <section className="hero-section">
            <h2>Find Your Perfect Rooms</h2>
            <p>Book from a wide range of Rooms at amazing prices!</p>
            <img
              style={{ width: "50%", height: "50%", padding: "10px" }}
              src="public/Images/pexels-pixabay-258154.jpg"
            />
            <img
              style={{ width: "45%", height: "50%", padding: "10px" }}
              src="public/Images/362619.jpg"
            />
          </section>
          {/* <section className="search-section">
            <h3>Search Hotels</h3>
          </section>
          <section className="featured-hotels">
            <h3>Featured Hotels</h3>
          </section> */}
        </main>
        <footer className="footer">
          <p>2024 Rx Hotel Booking. By Jermieorex</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
