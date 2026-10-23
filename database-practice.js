const products = [
  { id: 1, product_name: "Rice (50kg)", price: 78000, stock_quantity: 12 },
  { id: 2, product_name: "Notebook", price: 1500, stock_quantity: 0 },
  { id: 3, product_name: "School Bag", price: 12000, stock_quantity: 4 },
  { id: 4, product_name: "Biro (pack)", price: 800, stock_quantity: 60 },
  { id: 5, product_name: "Garri (bag)", price: 25000, stock_quantity: 2 },
  { id: 6, product_name: "Lunch Box", price: 4500, stock_quantity: 0 }
]
const orders = [
  { order_id: 101, customer_name: 'Ada', total: 15000, status: 'paid' },
  { order_id: 102, customer_name: 'Obi', total: 4500, status: 'pending' },
  { order_id: 103, customer_name: 'Ngozi', total: 78000, status: 'paid' },
  { order_id: 104, customer_name: 'Ada', total: 800, status: 'paid' },
  { order_id: 105, customer_name: 'Kunle', total: 25000, status: 'cancelled' },
  { order_id: 106, customer_name: 'Obi', total: 12000, status: 'pending' },
];
// Question 1
for (const product of products) {
  console.log(product.product_name + " - " + product.price);
}          
// Question 2 

let outOfStock = 0;

for (const product of products) {
  if (product.stock_quantity === 0) {
    outOfStock++;
  }
}

console.log(outOfStock);
//Question 3

let totalValue = 0;

for (const product of products) {
  totalValue += product.price * product.stock_quantity;
}

console.log(totalValue);
//Question 4

const affordableProducts = [];


for (const product of products) {
  if (product.price < 5000) {
    affordableProducts.push(product.product_name);
  }
}

console.log(affordableProducts);
// Question 5

function findProductById(products, id) {
  for (const product of products) {
    if (product.id === id) {
      return product;
    }
  }

  return "Product not found";
}

console.log(findProductById(products, 3));
console.log(findProductById(products, 99));
