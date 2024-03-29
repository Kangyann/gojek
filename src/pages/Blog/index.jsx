import Header from "components/template/Navbar";
import Footer from "components/section/Footer";
import { Link } from "react-router-dom";
import dataBlog from "utils/dataBlog"
const Blog = () => {
  
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <h1>What's On Gojek</h1>
          <span>Our stories, latest updates, and exclusive promos. Find anything you want to know about us.</span>
          <div className="main__content">
            {dataBlog.map((x, y) => (
              <Link to={"kangyann.my.od"} className="main__content__menu" key={y}>
                <div className="main__content__menu__image">
                  <img src={x.image} alt="blog_image" />
                </div>
                <div className="main__content__menu__text">
                  <h2>{x.title}</h2>
                  <span className="author">{x.by + " / " + x.date}</span>
                </div>
              </Link>
            ))}
          </div>
          <Link to={'https://www.gojek.com/blog?page=2'} className="main__next">
            <i className="pi pi-arrow-right"></i>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
