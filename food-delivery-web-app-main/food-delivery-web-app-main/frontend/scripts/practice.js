let result = "err";
if (result) {
  // console.log(true);
} else {
  // console.log(false)
}
const users = [
  { id: 1, name: "johan", ps: "aa" },
  { id: 2, name: "keera" },
  { id: 3, name: "advani" },
];
let result1 = users.find((user) => {
  console.log(user.id === 14);
  return user.id === 85;
});
console.log("rslt", result1);
const s = JSON.parse(null);
console.log("s", s);
const bt = document.getElementById("orderClick");
bt.addEventListener("click", (event) => {
  addToCart(100);
});
