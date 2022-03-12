const colors = ["#708090","#778899","#778899","#7B68EE","#7CFC00","#7FFF00","#7FFFD4","#800000","#800080","#808000","#808080","#B0E0E6","#B8860B","#BA55D3","#BC8F8F","#BDB76B","#C71585","#CD5C5C","#CD853F","#D2691E","#D2B48C","#D3D3D3","#D3D3D3","#D8BFD8","#DA70D6","#DAA520","#DB7093","#DC143C","#DCDCDC","#DDA0DD",
"#DEB887","#E0FFFF","#E9967A","#EE82EE","#EEE8AA","#FDF5E6","#FF0000"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}