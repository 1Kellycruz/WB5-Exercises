let cart = [
  { item: 'Bread', price: 3.29, quantity: 2 },
  { item: 'Milk', price: 4.09, quantity: 1 },
  { item: 'T-Bone Steak', price: 12.99, quantity: 2 },
  { item: 'Baking Potato', price: 1.89, quantity: 6 },
  { item: 'Iceberg Lettuce', price: 2.06, quantity: 1 },
  { item: 'Ice Cream - Vanilla', price: 6.81, quantity: 1 },
  { item: 'Apples', price: 0.66, quantity: 6 },
];

// A: Code to search cart array using map() & forEach()
function buildItemName(cart) {
    return cart.item
}
const itemList = cart.map(buildItemName)

function displayName(cart) {
    console.log(cart);
}
itemList.forEach(displayName)


// B: Code to determine a total cost usinf reduce()
function getTotalCost(currentTotal, arrayElement) {   
    return currentTotal + arrayElement.price * arrayElement.quantity;
}
const sum = cart.reduce(getTotalCost, 0);
console.log ("Total Cost: $", sum)

// C: Sorting the list in part A for display

console.log('--------');
itemList.sort();
itemList.forEach(displayName);