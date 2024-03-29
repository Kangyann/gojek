import { Link } from "react-router-dom";
import Data from "utils/dataHelp"
const Topics = () => {
    return (
        <>
            <div className="topics">
                <div className="container">
                    <h1>Browse Topics</h1>
                    <div className="topics__menu">
                        {Data.Topics.map((x, y) => (
                            <Link className="topics__menu__item">
                                <img src={x.image} alt="" width={30} height={30} />
                                <span>{x.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Topics;