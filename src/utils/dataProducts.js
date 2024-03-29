import imageProducts from "assets/Images/products.webp"
import imageIcon from "assets/Images/Products/index.js"
import imageBg1 from "assets/Images/food_bg.svg"
import imageBg2 from "assets/Images/business_bg.svg"

const data = {
  Header: {
    title: "We build products that nations run on",
    image: imageProducts,
    bg_1 : imageBg1,
    bg_2 : imageBg2
  },
  More : [
    {
      food: [
        {
          image: imageIcon.gofood_solid,
          description: "Hungry? Order in.",
        },
        {
          image: imageIcon.gomart_solid,
          description: "Groceries delivered from stores nearby.",
        },
        {
          image: imageIcon.gomed_solid,
          description: "Chat with doctors, order in medicines.",
        },
        {
          image: imageIcon.goshop_solid,
          description: "Buy anything from anywhere",
        },
      ],
      business: [
        {
          image: imageIcon.gobiz_solid,
          description: "A Gojek app to run and grow your business.",
        },
        {
          image: imageIcon.midtrans_solid,
          description: "Accept payments and make payouts easily",
        },
        {
          image: imageIcon.moka_solid,
          description: "Cloud based POS that made selling easy",
        },
        {
          image: imageIcon.selly_solid,
          description: "Keyboard for online sellers",
        },
      ],
    },
  ],
  Card : [
    {
      image: [
        imageIcon.goride,
        imageIcon.gocar,
        imageIcon.gobluebird,
        imageIcon.gosend,
        imageIcon.gobox,
      ],
      title: "Transport & Logistics",
      description:
        "We’ve kinda done 13,000 trips between the earth and the moon.",
      class: "transport",
    },
    {
      image: [
        imageIcon.gopay,
        imageIcon.gotagihan,
        imageIcon.gopaylater,
        imageIcon.gosure,
      ],
      title: "Payments",
      description:
        "From deals to donations, we make transactions easy, reliable, and cashless.",
      class: "payment",
    },
    {
      image: [
        imageIcon.gofood,
        imageIcon.gomed,
        imageIcon.gomart,
        imageIcon.goshop,
      ],
      title: "Food & Shooping",
      description:
        "Fill your cart with food, electronics, medicines, and more. Without stepping out!",
      class: "food",
    },
    {
      image: [
        imageIcon.gobiz,
        imageIcon.midtrans,
        imageIcon.moka,
        imageIcon.gostore,
        imageIcon.selly,
      ],
      title: "Business",
      description:
        "Manage your restaurants, run ads, create promos, and do more.",
      class: "bussiness",
    },
  ]
};

export default data;