function toCamelCase(text) {
  const parts = text.split("_");

  for (let i = 1; i < parts.length; i++) {
    parts[i] =
      parts[i][0].toUpperCase() + parts[i].slice(1);
  }

  return parts.join("");
}

console.log(toCamelCase("stock_quantity"));
console.log(toCamelCase("product_name"));
console.log(toCamelCase("price"));
// 12
function convertRow(row) {
  const newRow = {};

  for (const key in row) {
    newRow[toCamelCase(key)] = row[key];
  }

  return newRow;
}

const convertedProducts = products.map(product => convertRow(product));

console.log(convertRow({
  product_name: "Notebook",
  stock_quantity: 0
}));

console.log(convertedProducts);
//