import Header from "components/template/Navbar";
import Topics from "components/section/Topics";
import Footer from "components/section/Footer";
import ImageBg from "assets/Images/help.png"
const Company = () => {
  return (
    <>
      <Header />
      <div className="main help">
        <div className="help__header">
          <h2>Need some help?</h2>
          <div className="help__header__image">
            <img src={ImageBg} alt="help_icon" />
            <img src={ImageBg} alt="help_icon" />
          </div>
        </div>
      </div>
      <Topics />
      <Footer />
    </>
  );
};

export default Company;
