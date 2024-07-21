import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "VIP Raghuvaran",
    price: "₹250",
  },
  {
    imgURL: shoe5,
    name: "Master JD",
    price: "₹420",
  },
  {
    imgURL: shoe6,
    name: "Fight-Club Tyler Durden",
    price: "₹480",
  },
  {
    imgURL: shoe7,
    name: "VadaChennai Anbu",
    price: "₹340",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Ernest Khalimov",
    rating: 4.5,
    feedback: "My Favorite is JD. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Queen Krista Sudmalis",
    rating: 4.5,
    feedback:
      "I’m not feeling lonely anymore. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Batman OverSized-Tee", link: "/" },
      { name: "HomeLander Shoe", link: "/" },
      { name: "Tyler Durden Poster", link: "/" },
      { name: "Ryan Gosling Combo", link: "/" },
      { name: "Spider-man Shoe", link: "/" },
      { name: "JD Poster", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@me-core.com", link: "mailto:customer@me-core.com" },
      { name: "+420420420", link: "tel:+420420420" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
