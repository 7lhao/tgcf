const data = [
  "1.jpg",
  "169769705410.jpg",
  "169769705515.jpg",
  "169769705516.jpg",
  "169769705619.jpg",
  "169769705621.jpg",
  "169769705722.jpg",
  "169769705825.jpg",
  "169769705827.jpg",
  "169769705928.jpg",
  "169769705930.jpg",
  "169769706032.jpg",
  "169769706134.jpg",
  "169769706136.jpg",
  "169769706238.jpg",
  "169769706440.jpg",
  "169769706642.jpg",
  "169769706944.jpg",
  "169769707046.jpg",
  "169769707148.jpg",
  "169769707250.jpg",
  "169769707352.jpg",
  "169769707454.jpg",
  "169769707556.jpg",
  "169769707658.jpg",
  "169769707660.jpg",
  "169769707862.jpg",
  "169769707964.jpg",
  "169769707966.jpg",
  "169769708068.jpg",
  "169769708071.jpg",
  "169769708072.jpg",
  "169769708175.jpg",
  "169769708176.jpg",
  "169769708278.jpg",
  "169769708381.jpg",
  "169769708382.jpg",
  "169769708486.jpg",
  "169769708488.jpg",
  "169769708591.jpg",
  "169769708693.jpg",
  "169769708694.jpg",
  "169769709098.jpg",
  "1697697091100.jpg",
  "1697697093102.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

let html1 = "";
let html2 = "";
let arrLength1 = parseInt(data.length / 2);

for (let i in data) {
  if (i < arrLength1) {
    html1 += `<div class="grid-item"><img data-src="./images/${data[i]}" /></div>`;
  } else {
    html2 += `<div class="grid-item"><img data-src="./images/${data[i]}" /></div>`;
  }
}

document.querySelector(".image-group .group-1").innerHTML = html1;
document.querySelector(".image-group .group-2").innerHTML = html2;

const root = document.getElementsByTagName("ul")[0];
const options = {
  root: root,
  threshold: [0], //交会处
  rootMargin: "0px", //对视口进行收缩和扩张
};
const lazyIntersection = new IntersectionObserver((entires) => {
  entires.forEach((item, index) => {
    console.log(item);
    if (item.isIntersecting) {
      item.target.src = item.target.getAttribute("data-src");
      lazyIntersection.unobserve(item.target);
    }
  });
}, options);
let imgEls = Array.from(document.getElementsByTagName("img"));
imgEls.forEach((item) => {
  lazyIntersection.observe(item);
});
