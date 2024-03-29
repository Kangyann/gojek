
const Card2 = ({ main_text, sub_text, image, nameClass }) => {
    return (
        <li className="card2__box__item">
            <div className="card2__box__item__image">
                <div className={nameClass}>
                    {image.map((x, y) => (
                        <img src={x} alt="" key={y} />
                    ))}
                </div>
            </div>
            <div className="card2__box__item__text">
                <h3>{main_text}</h3>
                <span>{sub_text}</span>
            </div>
        </li>
    );
};

export default Card2;
