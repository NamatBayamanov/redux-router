const products = [
  {
    title: "Product1",
    productId: "1",
    description: "about product 1",
  },
  {
    title: "Product2",
    productId: "2",
    description: "about product 2",
  },
  {
    title: "Product3",
    productId: "3",
    description: "about product 3",
  },
  {
    title: "Product4",
    productId: "4",
    description: "about product 4",
  },
];

export function getProducts(params) {
  return products;
}

export function  getProduct(productId) {
  return products [
    products.findIndex((product => product.productId === productId))
  ];
}