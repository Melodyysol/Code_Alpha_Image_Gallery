import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const routes = [
  { id: 1, text: "home", path: "/" },
  { id: 2, text: "gallery", path: "gallery" },
  { id: 3, text: "about", path: "about" },
  { id: 4, text: "profile", path: "profile" },
];

const landingImageUrls = [
  {
    id: 1,
    url: "https://res.cloudinary.com/kc5ackh8/image/upload/v1789315719/sample.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/kc5ackh8/image/upload/v1789315734/cld-sample-2.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/kc5ackh8/image/upload/v1789315733/samples/paper.png",
  },
];

const socials = [
  {
    id: 1,
    name: "Facebook",
    url: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: FaLinkedin,
  },
];

export { routes, landingImageUrls, socials };
