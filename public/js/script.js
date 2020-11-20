let tableUsers = null;
let tableStatistics = null;

let foundUsers = [];
let allUsers = [];

let countUsers = 0;
let totalMale = 0;
let totalFemale = 0;
let totalAges = 0;
let avgAges = 0;

window.addEventListener("load", () => {
  tableUsers = document.querySelector("#tableUsers");
  tableStatistics = document.querySelector("#tableStatistics");

  countUsers = document.querySelector("#countUsers");
  totalMale = document.querySelector("#countMale");
  totalFemale = document.querySelector("#countFemale");
  totalAges = document.querySelector("#totalAges");
  avgAges = document.querySelector("#avgAges");

  numberFormat = Intl.NumberFormat("pt-BR");

  fetchUsers();
});

async function fetchUsers() {
  // prettier-ignore
  const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
  const json = await res.json();
  allUsers = json.map((user) => {
    const { name, gender, dob, picture } = user;
    return {
      name: name.first,
      lastName: name.last,
      gender,
      age: dob.age,
      picture,
    };
  });
  render();
}
function render() {}
