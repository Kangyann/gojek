import Navbar from "components/template/Navbar";
import Header from "components/template/Header";
import Loyalty from "components/section/Loyalty";
import Footer from "components/section/Footer";
import Card from "components/template/Card2";
import More from "components/template/More";
import Data from "utils/dataProducts"
const Products = () => {
  
  return (
    <>
      <Navbar />
      <Header title={Data.Header.title} image={Data.Header.image} />
      <div className="card2">
        <div className="container">
          {Data.Card.map((x, y) => (
            <div className="card2__box">
              <Card main_text={x.title} sub_text={x.description} image={x.image} nameClass={x.class} />
            </div>
          ))}
        </div>
      </div>
      <Loyalty />
      {/*  */}
      <div className="more" id="food">
        <div className="more__image">
          <img src={Data.Header.bg_1} alt="header_background_1" />
        </div>
        <div className="container">
          <div className="food">
            <h1>Food & Shopping</h1>
            <span>Fill your cart with food, groceries, medicines, electronics and more. Without stepping out.</span>
            <div className="more__inner">
              {Data.More[0].food.map((x, y) => (
                <div className="more__menu food__menu__item" key={y}>
                  <More image={x.image} description={x.description} button={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="more" id="business">
        <div className="more__image">
          <img src={Data.Header.bg_2} alt="header_backround_2" />
        </div>
        <div className="container">
          <div className="business">
            <h1>Business</h1>
            <span>Fill your cart with business, groceries, medicines, electronics and more. Without stepping out.</span>
            <div className="more__inner">
              {Data.More[0].business.map((x, y) => (
                <div className="more__menu business__menu__item" key={y}>
                  <More image={x.image} description={x.description} button={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
