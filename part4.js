function createStockManager(startQty) {
  let stock = startQty;

  return {
    add(n) {
      stock += n;
    },

    remove(n) {
      if (n > stock) {
        return "Not enough stock";
      }

      stock -= n;
    },

    getStock() {
      return stock;
    }
  };
}

const bags = createStockManager(4);

bags.add(10);
console.log(bags.remove(20)); // Not enough stock
console.log(bags.getStock()); // 14
console.log(bags.stock);      // undefined
// 17
function dailyReport(orders) {
  let totalPaid = 0;
  let pendingCount = 0;
  let biggestOrder = 0;

  for (const order of orders) {
    if (order.status === "paid") {
      totalPaid += order.amount;
    }

    if (order.status === "pending") {
      pendingCount++;
    }

    if (order.amount > biggestOrder) {
      biggestOrder = order.amount;
    }
  }

  return {
    totalPaid,
    pendingCount,
    biggestOrder
  };
}

console.log(dailyReport(orders));
// 18
// The createOrderNumber function accepts a starting number.
//  It creates a variable called orderNumber and returns another function.
//   That inner function remembers the value of orderNumber even after the outer function finishes.
//    Each time I call it, it returns the current number with ORD- in front and increases the number by one.
//     This is an example of a closure because the inner function remembers a variable from its outer function.