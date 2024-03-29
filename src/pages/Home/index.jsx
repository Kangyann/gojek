import Navbar from "components/template/Navbar";
import Scale from "components/section/Scale";
import Header from "components/template/Header";
import Join from "components/section/Join";
import Footer from "components/section/Footer";
import Loyalty from "components/section/Loyalty";
import data from "utils/dataScale.js"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header video={data.Section.video} title={data.Section.title} />
      <Scale title={"We scale like a dream"} data={data.Scale} link={"https://www.gojek.io/careers"} nameClass={"scale"} />
      <Loyalty />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
