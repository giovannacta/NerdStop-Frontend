
import tlou2 from "../assets/tlou2.jpeg"
import uncharted4 from "../assets/Uncharted 4_ A Thief's End (2016).jpeg"
import spiderman2 from "../assets/spiderman2.jpeg"
import gta5 from "../assets/GTA V Playstation 5.jpeg"
import xboxseriesx from "../assets/Xbox Series X.jpeg"
import pcgamer1 from "../assets/pcgamer1.jpeg"
import pcgamer2 from "../assets/pcgamer2.jpeg"
import ps5 from "../assets/ps5.jpeg"
import fperen from "../assets/Funko POP! Animation_ Attack on Titan - Eren Jeager - Collectable Vinyl Figure - Gift Idea - Official Merchandise - for Kids & Adults - Anime Fans - Model Figure for Collectors.jpeg"
import fpmikasa from "../assets/Funko POP! Mikasa Ackerman - 1166 Attack on Titan.jpeg"
import fpsquidgame from "../assets/Figura Funko Pop Tv Squid Game 1222 Gi Hun 456 colecionável 3+.jpeg"
import fpspiderman from "../assets/FunkoPop Spiderman.jpeg"

let all_products = [
  {
    id: 1,
    name: "The Last of Us 2",
    category: { _id: "67bdb66445db6f2497e1262a", name: "Games" },
    image: tlou2,
    new_price: 55.00,
    old_price: 105.00,
  },
  {
    id: 2,
    name: "Uncharted 4",
    category: { _id: "67bdb66445db6f2497e1262a", name: "Games" },
    image: uncharted4,
    new_price: 35,
    old_price: 65,
  },
  {
    id: 3,
    name: "Spiderman 2",
    category: { _id: "67bdb66445db6f2497e1262a", name: "Games" },
    image: spiderman2,
    new_price: 70,
    old_price: 105,
  },
  {
    id: 4,
    name: "GTA 5",
    category: { _id: "67bdb66445db6f2497e1262a", name: "Games" },
    image: gta5,
    new_price: 45,
    old_price: 65,
  },
  {
    id: 5,
    name: "Xbox Series X",
    category: { _id: "67bdb65245db6f2497e12628", name: "Consoles" },
    image: xboxseriesx,
    new_price: 499,
    old_price: 799,
  },
  {
    id: 6,
    name: "Gamer PC",
    category: { _id: "67bdb65245db6f2497e12628", name: "Consoles" },
    image: pcgamer1,
    new_price: 899,
    old_price: 1199,
  },
  {
    id: 7,
    name: "Gamer PC",
    category: { _id: "67bdb65245db6f2497e12628", name: "Consoles" },
    image: pcgamer2,
    new_price: 599,
    old_price: 899,
  },
  {
    id: 8,
    name: "PS5",
    category: { _id: "67bdb65245db6f2497e12628", name: "Consoles" },
    image: ps5,
    new_price: 599,
    old_price: 799,
  },
  {
    id: 9,
    name: "Funko Pop Eren Jeager",
    category: { _id: "67b8c9aa0384374b77dd2c89", name: "Funko Pop!" },
    image: fperen,
    new_price: 15,
    old_price: 25,
  },
  {
    id: 10,
    name: "Funko Pop Mikasa Ackerman",
    category: { _id: "67b8c9aa0384374b77dd2c89", name: "Funko Pop!" },
    image: fpmikasa,
    new_price: 15,
    old_price: 25,
  },
  {
    id: 11,
    name: "Funko Pop Squid Game",
    category: { _id: "67b8c9aa0384374b77dd2c89", name: "Funko Pop!" },
    image: fpsquidgame,
    new_price: 15,
    old_price: 25,
  },
  {
    id: 12,
    name: "Funko Pop Spiderman",
    category: { _id: "67b8c9aa0384374b77dd2c89", name: "Funko Pop!" },
    image: fpspiderman,
    new_price: 15,
    old_price: 25,
  },
  
];

export default all_products;
