let prodect = [
  {
    id: "p1",
    name: "Waffle",
    price: 650,
    dis: "Waffle with Berries",
    imgsrc: "/assets/images/image-waffle-desktop.jpg",
  },
  {
    id: "p2",
    name: "Crème Brûlée",
    price: 700,
    dis: "Vanilla Bean Crème Brûlée",
    imgsrc: "/assets/images/image-creme-brulee-desktop.jpg",
  },
  {
    id: "p3",
    name: "Macaron",
    price: 800,
    dis: "Macaron Mix of Five",
    imgsrc: "/assets/images/image-macaron-desktop.jpg",
  },
  {
    id: "p4",
    name: "Tiramisu",
    price: 550,
    dis: "Classic Tiramisu",
    imgsrc: "/assets/images/image-tiramisu-desktop.jpg",
  },
  {
    id: "p5",
    name: "Baklava",
    price: 400,
    dis: "Pistachio Baklava",
    imgsrc: "/assets/images/image-baklava-desktop.jpg",
  },
  {
    id: "p6",
    name: "Pie",
    price: 500,
    dis: "Lemon Meringue Pie",
    imgsrc: "/assets/images/image-meringue-desktop.jpg",
  },
  {
    id: "p7",
    name: "Cake",
    price: 450,
    dis: "Red Velvet Cake",
    imgsrc: "/assets/images/image-cake-desktop.jpg",
  },
  {
    id: "p8",
    name: "Brownie",
    price: 450,
    dis: "Salted Caramel Brownie",
    imgsrc: "/assets/images/image-brownie-desktop.jpg",
  },
  {
    id: "p9",
    name: "Panna Cotta",
    price: 650,
    dis: "Vanilla Panna Cotta",
    imgsrc: "/assets/images/image-panna-cotta-desktop.jpg",
  },
];
let cart = [];
let h = "";
prodect.forEach((i) => {
  h += `<div class="prod">
          <div class="img">
            <img src="${i.imgsrc}" alt="" />
          </div>
          <div class="btn">
            <button class="Add" id='${i.id}'>
              <img src="/assets/images/icon-add-to-cart.svg" alt="" />Add to
              card
            </button>
            <div class="btnn">
              <button style="background-image: url(/assets/images/icon-decrement-quantity.svg)"onclick="xxx('${
                i.id
              }')"></button>
              <h3 class='js-${i.id}'>1</h3>
              <button style="background-image: url(/assets/images/icon-increment-quantity.svg)"onclick="xx('${
                i.id
              }')"></button>
            </div>
          </div>
          <div class="text">
            <h1>${i.name}</h1>
            <h2>${i.dis}</h2>
            <h3>$${(i.price / 100).toFixed(2)}</h3>
          </div>
        </div>`;
});
document.querySelector(".pro").innerHTML = h;
let c = 0;
let k = "";
let l = "";
let t = 0;
let q = 0;
function rendrch() {
  k = "";
  l = "";
  t = 0;
  q = 0;
  cart.forEach((i) => {
    k += ` <div class="inf jsx-${i.id}">
            <h1>${i.name}</h1>
            <span style="color: red">${i.q}X</span>
            <span style="color: rgb(46, 46, 46)">$${(i.price / 100).toFixed(
              2
            )}</span>
            <span style="color: black">$${((i.price / 100) * i.q).toFixed(
              2
            )}</span>
            <button onclick="removefrom('${i.id}')"></button>
          </div>`;
    l += ` <div class="inf jsx-${i.id}"><div>
            <h1>${i.name}</h1>
            <span style="color: red">${i.q}X</span>
            <span style="color: rgb(46, 46, 46)">$${(i.price / 100).toFixed(
              2
            )}</span>
            </div><span style="color: black">$${((i.price / 100) * i.q).toFixed(
              2
            )}</span>
          </div>`;
    t += (i.q * i.price) / 100;
    q += i.q;
  });
  c = q;
  document.querySelector(".cardd").innerHTML = l;
  document.querySelector(".card").innerHTML = k;
  document.querySelector(".t").innerHTML = `$${t.toFixed(2)}`;
  document.querySelector(".po").innerHTML = `$${t.toFixed(2)}`;
  document.querySelector(".q").innerHTML = `Your Cart(${q})`;
  document.querySelector(".ccc").innerHTML = `(${q})`;
  ifch();
}
rendrch();
prodect.forEach((i) => {
  document
    .querySelector(`#${i.id}`)
    .addEventListener("click", () => addtocart(i.id, i.dis, i.price, i.id));
});
function addtocart(id, name, price, id) {
  document.querySelector(`#${id}`).style.zIndex = "0";
  cart.push({ id: id, name: name, price: price, q: 1 });
  rendrch();
}
function xx(id) {
  let x = document.querySelector(`.js-${id}`).innerHTML;
  x++;
  document.querySelector(`.js-${id}`).innerHTML = x;
  let f;
  cart.forEach((i) => {
    if (i.id === id) {
      f = i;
    }
  });
  f.q = x;
  rendrch();
}
function xxx(id) {
  let f;
  cart.forEach((i) => {
    if (i.id === id) {
      f = i;
    }
  });
  let x = document.querySelector(`.js-${id}`).innerHTML;
  x = x - 1;
  f.q = x;
  if (x === 0) {
    document.querySelector(`#${id}`).style.zIndex = "2";
    cart = cart.filter((q) => q.id !== id);
  } else {
    document.querySelector(`.js-${id}`).innerHTML = x;
  }

  rendrch();
}
function removefrom(id) {
  cart = cart.filter((q) => q.id !== id);
  rendrch();
  document.querySelector(`#${id}`).style.zIndex = "2";
  document.querySelector(`.js-${id}`).innerHTML = 1;
}
function ifch() {
  if (c === 0) {
    document.querySelector(".disp").style.display = "none";
    document.querySelector(".check").classList.add("bd");
    document.querySelector(".jh").style.display = "block";
  } else {
    document.querySelector(".check").classList.remove("bd");
    document.querySelector(".disp").style.display = "block";
    document.querySelector(".jh").style.display = "none";
  }
}
ifch();
document.querySelector(".res").addEventListener("click", () => {
  document.querySelector(".or").style.display = "none";
  prodect.forEach((i) => {
    document.querySelector(`.js-${i.id}`).innerHTML = 1;
    document.querySelector(`#${i.id}`).style.zIndex = "2";
  });
  cart = [];
  k = "";
  l = "";
  t = 0;
  q = 0;
  rendrch();
});
document.querySelector(".resd").addEventListener("click", () => {
  document.querySelector(".or").style.display = "block";
  document.querySelector(".check").classList.toggle("dddd");
  document.querySelector(".ccc").classList.toggle("dddu");
});
document.querySelector(".ccc").addEventListener("click", () => {
  document.querySelector(".check").classList.toggle("dddd");
  document.querySelector(".ccc").classList.toggle("dddu");
});
