
import Card from "components/template/Card"
import { Link } from "react-router-dom";
const Scale = ({ title, data, link, nameClass }) => {
    return (
        <div className={nameClass}>
            <div className="container">
                <div className={nameClass + "__heading"}>
                    <h2>{title}</h2>
                    {link ? (
                        <Link to={link} className="button">Scale with us</Link>
                    ) : (
                        ""
                    )}
                </div>
                <div className="card">
                    <div className="card__box">
                        {data.map((val, idx) => (
                            <Card main_text={val.title} sub_text={val.description} image={val.image} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scale;
