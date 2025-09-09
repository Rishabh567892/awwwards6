export default [
  {
    heading: "Services",
    desc: "Select the service that best suits your needs.",
    buttons: ["Web Design", "Visual Identity", "E-Commerce", "Identity and Website", "Development", "Branding", "Other"]
  },
  {
    heading: "Timeframe",
    desc: "Estimate how much time you have to spend.",
    buttons: ["1 month", "2-3 month", "3-6 month", "Whenever",]
  },
  {
    heading: "Estimated Budget",
    desc: "Select an estimated budget for your project.",
    buttons: ["$5k - $10k", "$10k - $15k", "$15k - $20k", "$20k - $25k", "$25k+"]
  }
]



let list = [];

document.querySelectorAll(".archive_rel_el").forEach(div => {

  div.querySelectorAll("button").forEach(btn => {
    list.push(btn.textContent);
  })
})

console.log(list)