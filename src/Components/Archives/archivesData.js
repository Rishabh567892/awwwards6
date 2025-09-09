export default [
  { name: "Perpetua", type: "Lifestyle" },
  { name: "OuterSpaces", type: "Lifestyle" },
  { name: "Destaire", type: "Lifestyle" },
  { name: "Aunts et Uncles", type: "E-commerce" },
  { name: "Bang & Olufsen", type: "E-commerce" },
  { name: "Nook Homes", type: "Lifestyle" },
  { name: "Reike Nen", type: "E-commerce" },
  { name: "Roman Vlasov", type: "Lifestyle" },
  { name: "Rowse", type: "E-commerce" },
  { name: "Nshpd", type: "Experimental" },
  { name: "Orris", type: "E-commerce" },
  { name: "Gubi", type: "Lifestyle" },
  { name: "Cirqa Hotel", type: "Lifestyle" },
  { name: "Ilja van Eck", type: "Experimental" }
]

let list = [];

document.querySelectorAll(".archive_rel_el").forEach(li => {

  li.querySelector("button").querySelectorAll("span").forEach((span, i) => {
    if (i == 1) list.push({ name: span.textContent })
    if (i == 2) list[list.length - 1].type = span.textContent
  })
})

console.log(list)