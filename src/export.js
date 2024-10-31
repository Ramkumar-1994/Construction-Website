import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";
import Services from "./components/Services";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "We specialize in transforming spaces through renovation, enhancing functionality and aesthetics while preserving the integrity of your building.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Our construction team is dedicated to delivering high-quality work on time and within budget, handling projects of all sizes with expert precision.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Our design and planning services ensure that every project begins with a clear, creative vision, tailored to meet your unique requirements and style.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "We manage all necessary documentation, from permits to compliance records, so your project proceeds smoothly and meets all legal requirements.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Our interior design services bring your spaces to life, combining aesthetics with practicality to create beautiful, functional environments.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "We offer dedicated customer support, ensuring clear communication and assistance throughout your project, from start to finish.",
  },
];


export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We start by carefully planning every detail, ensuring your vision is clear and achievable. From budgets to timelines, we cover it all to make sure your project is a success.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Our design team brings your ideas to life, blending creativity with functionality to create stunning, practical spaces that reflect your style and needs.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "With skilled builders and quality materials, we transform designs into reality, ensuring durability, precision, and an attention to detail in every aspect of construction.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "We complete your project with a flawless finish, handling the final touches that bring everything together, so your space is ready for you to enjoy.",
  },
];


export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Building my dream home was a seamless experience! The team was professional, and every detail was attended to with utmost precision. I couldn’t be happier with the result!",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "From start to finish, the project was handled with great care. They understood my vision and made my dream building a reality. Highly recommend!",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "It was a pleasure working with this team on my dream home. They brought my ideas to life with incredible craftsmanship and attention to detail.",
    post: "Builder",
  },
];


export default {allservices,planning,clients}
