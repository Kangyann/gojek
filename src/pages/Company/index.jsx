import Navbar from "components/template/Navbar";
import Header from "components/template/Header"
import Scale from "components/section/Scale";
import Footer from "components/section/Footer";
import Loyalty from "components/section/Loyalty";
import data from "utils/dataCompany"

const Company = () => {

  return (
    <>
      <Navbar />
      <Header title={data.Header.title} description={data.Header.description} image={data.Header.image} />
      <Scale title={"The three pillars of Gojek"} data={data.Pillars} nameClass={"pillars"} />
      <Loyalty/>
      <Footer />
    </>
  );
};

export default Company;
