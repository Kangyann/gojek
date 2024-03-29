import Navbar from "components/template/Navbar";
import Header from "components/template/Header";
import More from "components/template/More";
import Join from "components/section/Join";
import Footer from "components/section/Footer";
import Data from "utils/dataPartner"
const Partner = () => {

  return (
    <>
      <Navbar />
      <Header image={Data.Header.image} title={Data.Header.title} description={Data.Header.description} />
      <div className="more">
        <div className="container">
          <h1>What's your forte ?</h1>
          <div className="more__inner">
            {Data.More.map((x, y) => (
              <div className="more__menu" key={y}>
                <More title={x.title} description={x.description} button={"Register"} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Join />
      <Footer />
    </>
  );
};

export default Partner;