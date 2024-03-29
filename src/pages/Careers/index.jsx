import Navbar from "components/template/Navbar";
import Header from "components/template/Header";
import More from "components/template/More";
import Join from "components/section/Join";
import Footer from "components/section/Footer";
import data from "utils/dataCareers"
const Careers = () => {
  return (
    <>
      <Navbar />
      <Header title={data.Header.title} image={data.Header.image} description={data.Header.description} />
      <div className="more">
        <div className="container">
          <h1>What drives you?</h1>
          <div className="more__inner">
            {data.More.map((x, y) => (
              <div className="more__menu" key={y}>
                <More image={x.image} description={x.description} button={"Know More"} />
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

export default Careers;
