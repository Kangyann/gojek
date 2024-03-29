const Header = ({ title, description, video, image }) => {
    return (
        <>
            <div className="header" >
                <div className="header__container">
                    {video ? (
                        <iframe title="Gojek - The Flow" src={video}
                            allowfullscreen
                        ></iframe>
                    ) : (
                        <img src={image} alt="header_background" />
                    )}
                    <div className="header__item container">
                        <div className="header__item__text">
                            <h1>{title}</h1>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Header;
