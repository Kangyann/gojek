import imageCompany from "assets/Images/company.webp";
import imageSocial from "assets/Images/social.svg";
import imageSpeed from "assets/Images/speed.svg";
import imageInnovation from "assets/Images/innovation.svg";

const data = {
  Header: {
    title: "Been quite a ride",
    description: "Know our journey, and the people behind it.",
    image: imageCompany,
  },
  Pillars: [
    {
      title: "Innovation",
      description: "Solve problems at scale.",
      image: [imageInnovation],
    },
    {
      title: "Social Impact",
      description: "Transform lives, inspire change.",
      image: [imageSocial],
    },
    {
      title: "Speed",
      description: "Move fast, push boundaries.",
      image: [imageSpeed],
    },
  ],
};

export default data;
