const products = [
  {
    name: "Malibu",
    images: [
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/cars/malibu/01-images/colorizer/2022-malibu-1lt-gaz-colorizer.jpg?imwidth=900",
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/cars/malibu/01-images/colorizer/2022-malibu-1lt-gsk-colorizer.jpg?imwidth=900",
      "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/cars/malibu/01-images/colorizer/2022-malibu-1lt-gb8-colorizer.jpg?imwidth=900",
    ],
    description:
      "Malibu Midnight Edition and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 8000.99,
    countInStock: 10,
  },
  {
    name: "Porsche 918 Spyder",
    images: [
      "https://www.ilusso.com/imagetag/413/main/l/Used-2015-Porsche-918-Spyder-1647719579.jpg",
      "https://www.ilusso.com/imagetag/413/2/l/Used-2015-Porsche-918-Spyder-1647719731.jpg",
      "https://www.ilusso.com/imagetag/413/3/l/Used-2015-Porsche-918-Spyder-1647719731.jpg",
    ],
    description:
      "2015 Porsche 918 Spyder with 4.6L Plug-in Hybrid V8 887hp 944ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 1700000,
    countInStock: 3,
  },
  {
    name: "McLaren MSO HS",
    images: [
      "https://www.ilusso.com/imagetag/399/main/l/Used-2016-McLaren-MSO-HS-1645297114.jpg",
      "https://www.ilusso.com/imagetag/399/2/f/Used-2016-McLaren-MSO-HS-1645299853.jpg",
      "https://www.ilusso.com/imagetag/399/3/f/Used-2016-McLaren-MSO-HS-1645299853.jpg",
    ],
    description:
      "2016 McLaren MSO HS with 3.8L Twin Turbo V8 666hp 516ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 7300000,
    countInStock: 3,
  },
  {
    name: "2021 Mercedes-Benz AMG GT",
    images: [
      "https://www.ilusso.com/imagetag/352/main/l/Used-2021-Mercedes-Benz-AMG-GT-Black-Series-1642210027.jpg",
      "https://www.ilusso.com/imagetag/352/2/f/Used-2021-Mercedes-Benz-AMG-GT-Black-Series-1642210027.jpg",
      "https://www.ilusso.com/imagetag/352/5/f/Used-2021-Mercedes-Benz-AMG-GT-Black-Series-1642210027.jpg",
    ],
    description:
      "2021 Mercedes-Benz AMG GT  Bright Diamond White 887hp 944ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 2300000,
    countInStock: 4,
  },
  {
    name: "Lamborghini Huracan",
    images: [
      "https://www.ilusso.com/imagetag/435/main/l/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-1649363247.jpg",
      "https://www.ilusso.com/imagetag/435/2/f/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-1649363247.jpg",
      "https://www.ilusso.com/imagetag/435/5/f/Used-2020-Lamborghini-Huracan-LP-640-4-EVO-1649363247.jpg",
    ],
    description:
      "Lamborghini Huracan 2020 5.2L V10 630hp 443ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 8800000,
    countInStock: 4,
  },
  {
    name: "2021 Lamborghini Huracan",
    images: [
      "https://www.ilusso.com/imagetag/280/main/l/Used-2021-Lamborghini-Huracan-STO-1636487549.jpg",
      "https://www.ilusso.com/imagetag/280/3/f/Used-2021-Lamborghini-Huracan-STO-1636487681.jpg",
      "https://www.ilusso.com/imagetag/280/10/f/Used-2021-Lamborghini-Huracan-STO-1636487681.jpg",
    ],
    description:
      "7-Speed Double Clutch 2021 Lamborghini Huracan with 4.6L Plug-in Hybrid V8 887hp 944ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 7200000,
    countInStock: 3,
  },
  {
    name: "2018 Porsche 911",
    images: [
      "https://www.ilusso.com/imagetag/449/main/l/Used-2018-Porsche-911-GT2-RS-1649974833.jpg",
      "https://www.ilusso.com/imagetag/449/2/f/Used-2018-Porsche-911-GT2-RS-1649974833.jpg",
      "https://www.ilusso.com/imagetag/449/4/f/Used-2018-Porsche-911-GT2-RS-1649974833.jpg",
    ],
    description:
      "2018 Porsche 911 3.8L Twin Turbo H6 700hp 553ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 3000000,
    countInStock: 3,
  },
  {
    name: "Jeep Wrangler Unlimited",
    images: [
      "https://www.ilusso.com/imagetag/394/main/l/Used-2018-Jeep-Wrangler-Unlimited-Rubicon-1644705374.jpg",
      "https://www.ilusso.com/imagetag/394/2/f/Used-2018-Jeep-Wrangler-Unlimited-Rubicon-1644706077.jpg",
      "https://www.ilusso.com/imagetag/394/4/f/Used-2018-Jeep-Wrangler-Unlimited-Rubicon-1644706077.jpg",
    ],
    description:
      "2018 Jeep Wrangler Unlimited3.6L V6 285hp 260ft. lbs. engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 8500000,
    countInStock: 1,
  },
  {
    name: "Ferrari 488 Spider",
    images: [
      "https://www.ilusso.com/imagetag/451/main/l/Used-2018-Ferrari-488-Spider-1649975953.jpg",
      "https://www.ilusso.com/imagetag/451/41/f/Used-2018-Ferrari-488-Spider-1649975953.jpg",
      "https://www.ilusso.com/imagetag/451/49/f/Used-2018-Ferrari-488-Spider-1649975953.jpg",
    ],
    description:
      "2018 Ferrari 488 Spider 3.9L Twin Turbo V8 660hp 561ft. lbs engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 9000000,
    countInStock: 5,
  },
  {
    name: "2021 McLaren GT",
    images: [
      "https://www.ilusso.com/imagetag/456/main/l/Used-2021-McLaren-GT-1650565281.jpg",
      "https://www.ilusso.com/imagetag/456/3/f/Used-2021-McLaren-GT-1650565281.jpg",
      "https://www.ilusso.com/imagetag/456/4/f/Used-2021-McLaren-GT-1650565281.jpg",
    ],
    description:
      "2021 McLaren GT 4.0L Twin Turbo V8 612hp 465ft. lbs engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 9500000,
    countInStock: 3,
  },
  {
    name: "McLaren 570S",
    images: [
      "https://www.ilusso.com/imagetag/461/main/l/Used-2017-McLaren-570S-1650563968.jpg",
      "https://www.ilusso.com/imagetag/461/2/f/Used-2017-McLaren-570S-1650563968.jpg",
      "https://www.ilusso.com/imagetag/461/4/f/Used-2017-McLaren-570S-1650563968.jpg",
    ],
    description:
      "McLaren 570S 2017 Twin Turbo V8 562hp 443ft. lbs engine and Sport Edition make you the center of attention with bold, blacked-out accents.",
    price: 9999999,
    countInStock: 2,
  },
];

export default products;
