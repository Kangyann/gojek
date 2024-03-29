import Logo from "assets/Images/home_spot.svg";

const Loyalty = () => {
    const dataLoyalty = {
        title: "Gojek Loyalty Program",
        description: "Make more transactions, get more rewards!",
        image: Logo
      }
    return (
      <div className="section">
        <div className="container">
          <div className="section__banner">
            <img src={dataLoyalty.image} alt="Benefit Logo" width="545" height="409" />
            <div className="section__banner__text">
              <h3>{dataLoyalty.title}</h3>
              <span>{dataLoyalty.description}</span>
              <a href="https://www.gojek.com/id-id" className="button">View More</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Loyalty;
  