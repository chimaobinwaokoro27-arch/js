let totalReceived = 0;

for (const order of orders) {
  if (order.status === "paid") {
    totalReceived += order.amount;
  }
}

console.log(totalReceived);
// 7
function countByStatus(orders) {
  const counts = {};

  for (const order of orders) {
    if (counts[order.status] === undefined) {
      counts[order.status] = 0;
    }

    counts[order.status]++;
  }

  return counts;
}

console.log(countByStatus(orders));
//8
const topThree = [...products]
  .sort((a, b) => b.price - a.price)
  .slice(0, 3)
  .map(product => product.product_name);

console.log(topThree);
// const stockAlerts = [];
// 9
for (const product of products) {
  if (product.stock_quantity < 5) {
    if (product.stock_quantity === 0) {
      stockAlerts.push("Out of stock: " + product.product_name);
    } else {
      stockAlerts.push(
        "Low stock: " +
        product.product_name +
        " (" + product.stock_quantity + " left)"
      );
    }
  }
}

console.log(stockAlerts);
//10
const paidCustomers = [];

for (const order of orders) {
  if (
    order.status === "paid" &&
    !paidCustomers.includes(order.customer_name)
  ) {
    paidCustomers.push(order.customer_name);
  }
}

console.log(paidCustomers); 
