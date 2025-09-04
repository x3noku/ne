export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  isOnSale?: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Jordan 1 Retro Low OG SP Travis Scott Velvet Brown",
    price: 3990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/4244703012.jpeg",
  },
  {
    id: "2",
    name: "Nike Air Jordan 1 Retro Low OG SP Travis Scott Medium Olive",
    price: 3990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/3544957402.jpeg",
  },
  {
    id: "3",
    name: "Hermes Chypre Beige Esquisse (Nude Leather)",
    price: 7490,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/236144392.jpeg",
  },
  {
    id: "4",
    name: "Adidas Handball Spezial Sporty & Rich Brown",
    price: 3990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/585749783.jpeg",
  },
  {
    id: "5",
    name: "Nike Air Jordan 1 Retro Low OG SP Travis Scott Canary Kids",
    price: 1290,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/47226757.jpeg",
  },
  {
    id: "6",
    name: "Yeezy Slide Slate Marine Kids",
    price: 990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/1316337714.jpeg",
  },
  {
    id: "7",
    name: "Yeezy Foam RNNR Carbon Kids",
    price: 1090,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/1561667785.jpeg",
  },
  {
    id: "8",
    name: "Nike Air Jordan 4 Military Blue (GS)",
    price: 1290,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/4198177242.jpeg",
  },
  {
    id: "9",
    name: "Nike Air Jordan Jumpman Jack TR Travis Scott Sail (TD)",
    price: 1490,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/3589488616.jpeg",
  },
  {
    id: "10",
    name: "Nike Air Jordan 1 Retro Low OG SP Travis Scott Canary (W)",
    price: 2990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/4035759791.jpeg",
  },
  {
    id: "11",
    name: "Nike Air Jordan Jumpman Jack TR Travis Scott Sail (PS)",
    price: 1490,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/3732176682.jpeg",
  },
  {
    id: "12",
    name: "Nike Air Jordan 1 Retro Low OG Trophy Room Away",
    price: 3990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/3603116970.jpeg",
  },
  {
    id: "13",
    name: "Nike Air Jordan 1 Low ALT Bred Toe (PS)",
    price: 1090,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/940034812.jpeg",
  },
  {
    id: "14",
    name: "Nike SB Dunk Low April Skateboards",
    price: 1699,
    originalPrice: 2290,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/4272487150.jpeg",
    isOnSale: true,
    badge: "Sale",
  },
  {
    id: "15",
    name: "Nike Air Force 1 Low RTFKT Clone X Murakami Drip",
    price: 8990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/332289089.jpeg",
  },
  {
    id: "16",
    name: "Loewe x On Running Cloudtilt Forever Blue (W)",
    price: 3990,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/178414781.jpeg",
  },
  {
    id: "17",
    name: "Nike SB Dunk Low The Powerpuff Girls Buttercup (PS)",
    price: 1199,
    originalPrice: 1490,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/1947463855.jpeg",
    isOnSale: true,
    badge: "Sale",
  },
  {
    id: "18",
    name: "Nike SB Dunk Low Albino & Preto",
    price: 699,
    originalPrice: 999,
    currency: "AED",
    image: "https://ext.same-assets.com/150513346/2513438994.jpeg",
    isOnSale: true,
    badge: "Sale",
  },
];
