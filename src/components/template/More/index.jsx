import { Link } from "react-router-dom";

const More = ({ image, link, title, description, button }) => {
    return (
        <>
            <div className="more__menu__text">
                {image ? (
                    <img src={image} alt="Gojek" />
                ) : (
                    <h1>{title}</h1>
                )}
                <span>{description}</span>
            </div>
            {button !== true ? (
                <Link to={link} className="button">{button}</Link>
            ) : (
                <>
                    <Link to={link} className="more__button__arrow">Know More<i className="pi pi-arrow-right"></i></Link>
                </>
            )}
        </>
    );
};
export default More;
