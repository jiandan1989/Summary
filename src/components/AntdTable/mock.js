const data = Array(100).fill(1).map((k, i) => ({
  id: `${i}`,
  name: `name-${i}`,
  age: Math.pow(i + 1, 2),
  Address: `address-${i}`,
}));

export default data;