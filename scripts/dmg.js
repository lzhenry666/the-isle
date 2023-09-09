//const selectdino = document.getElementById("selectYourDino");

var dinos = [
  {
    Name: "Acrocanthosaurus",
    Image: "img/dinos/Acrocanthosaurus.webp",
    Damage: "250",
    gameMod: "progression",
    Diet: "Carnivore",
    Alt: "",
    Health: "4790",
    Mass: "4790",
    Speed: "42.6",
    Ambush: "52.2",
    Bleed: "20",
    Growth: "360",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 120,
      sub: 0,
      adult: 120,
      total: 240,
    },
    SprintDuration: "0:27",
    icon: "t-rex",
  },
  {
    Name: "Albertosaurus",
    Image: "/img/dinos/Albertosaurus.jpg",
    gameMod: "progression",
    Diet: "Carnivore",
    Damage: "424",
    Alt: "",
    Health: "3000",
    Mass: "3000",
    Speed: "39.2",
    Ambush: "42.1",
    Bleed: "10",
    Growth: "180",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 0,
      sub: 0,
      adult: 120,
      total: 120,
    },
    SprintDuration: "no data",
    icon: "allosaurus",
  },
  {
    Name: "Avaceratops",
    Image: "https://static.wikia.nocookie.net/isle/images/9/90/Avaceratops.png",
    Damage: "25",
    Alt: "",
    gameMod: "survival",
    Health: "1000",
    Mass: "1000",
    Speed: "29.3",
    Ambush: "",
    Bleed: "",
    Growth: "",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
  },
  {
    Name: "Baryonyx",
    Image:
      "https://static.wikia.nocookie.net/isle/images/d/d0/Baryonyx_Skin_Render.jpg",
    Damage: "150",

    gameMod: "survival",
    Diet: "Carnivore",
    Alt: "",
    Health: "1450",
    Mass: "1450",
    Speed: "41.3",
    Ambush: "49.6",
    Bleed: "15",
    Growth: "180",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 90,
      sub: 0,
      adult: 90,
      total: 180,
    },
    SprintDuration: "2:35",
    icon: "velociraptor",
  },
  {
    Name: "Orodromeus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/9/9b/Orodromeus_brown.png",
    Damage: "25",
    Alt: "",
    gameMod: "progression",

    Health: "25",
    Mass: "75",
    Speed: "20.25",
    Ambush: "",
    Bleed: "",
    Growth: "",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
  },
  {
    Name: "Velociraptor",
    Image:
      "https://static.wikia.nocookie.net/isle/images/2/23/Green_Velociraptor_The_Isle.png",
    Damage: "5",
    Alt: "",
    gameMod: "progression",
    Health: "25",
    Mass: "25",
    Speed: "27",
    Ambush: "",
    Bleed: "",
    Growth: "",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    Diet: "Carnivore",
  },
  {
    name: "Puertasaurus",
    gameMod: "progression",
    icon: "puertasaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/2/2a/Puertasaurus.png",
    gameMod: "progression",

    id: 22,
    diet: "herbivore",
    Damage: 5000,
    Alt: "n/a",
    Health: 49895,
    Mass: 49895,
    Speed: "no data",
    Ambush: "n/a",
    Sprint: "no data",
    BleedDamage: "n/a",
    growTime: {
      hatch: 0,
      juvie: 0,
      sub: 0,
      adult: 0,
      total: 0,
    },
  },
  {
    Name: "Therizinosaurus",
    Imaage:
      "https://static.wikia.nocookie.net/isle/images/2/26/Theri.jpg/revision/latest?cb=20200208142221",
    Damage: "700",
    Alt: "3500",
    gameMod: "progression",

    Health: "4536",
    Mass: "4536 ",
    Speed: "38.2",
    Ambush: "",
    Bleed: "",
    Growth: "300",
    SitBleedResist: 25,
    BleedResist: 50,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 0,
      juvie: 180,
      sub: 0,
      adult: 120,
      total: 300,
    },
    SprintDuration: "1:05",
    icon: "allosaurus",
  },
  {
    Name: "Allosaurus",
    Image: "/img/dinos/Allosauro.png",
    Damage: "300",
    Alt: "",
    gameMod: "survival",
    Health: "2800",
    Mass: "2800",
    Speed: "34.2",
    Ambush: "44.5",
    Bleed: "25",
    Growth: "180",
    SitBleedResist: 25,
    BleedResist: 60,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 30,
      juvie: 60,
      sub: 0,
      adult: 120,
      total: 180,
    },
    SprintDuration: "3:20",
    icon: "allosaurus",
    Diet: "Carnivore",
  },
  {
    Name: "Ankylosaurus",
    Image: "https://static.wikia.nocookie.net/isle/images/6/69/Ankylosaur",
    Damage: "1260",
    Alt: "",
    gameMod: "progression",

    Health: "5443",
    Mass: "5443",
    Speed: "19.3",
    Ambush: "",
    Bleed: "",
    Growth: "240",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 120,
      sub: 0,
      adult: 120,
      total: 240,
    },
    SprintDuration: "2:00",
    icon: "ankylosaurus",
  },
  {
    Name: "Austroraptor",
    Image:
      "https://static.wikia.nocookie.net/isle/images/b/b0/Austromodel.jpg/",
    Damage: "60",
    Alt: "",
    gameMod: "progression",
    Diet: "Carnivore",
    Health: "250",
    Mass: "250",
    Speed: "51.5",
    Bleed: "2",
    Growth: "120",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 60,
      sub: 0,
      adult: 60,
      total: 120,
    },
    SprintDuration: "1:00",
    icon: "velociraptor",
  },
  {
    Name: "Camarasaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/b/b1/Camarasaurus_Model_The_Isle.png",
    Damage: "750",
    Alt: "5150",
    Diet: "Herbivore",
    gameMod: "progression",
    Health: "12000",
    Mass: "12000",
    Speed: "20.7",
    Ambush: "",
    Bleed: "",
    Growth: "",
    SitBleedResist: 25,
    BleedResist: 40,
    TrotBleedResist: 40,
    RunBleedResist: 100,
    growTime: {
      hatch: 0,
      juvie: 0,
      sub: 0,
      adult: 0,
      total: 0,
    },
    SprintDuration: "1:10",
    icon: "camarasaur",
  },
  {
    Name: "Carnotaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/6/67/The_isle_carnotaurus_new_2020.jpeg",
    Damage: "200",
    Alt: "",
    gameMod: "survival",
    Health: "2170",
    Mass: "2170",
    Speed: "52.2",
    Ambush: "",
    Bleed: "15",
    Growth: "110",
    SitBleedResist: 20,
    BleedResist: 70,
    TrotBleedResist: 50,
    RunBleedResist: 60,
    growTime: {
      hatch: 25,
      juvie: 40,
      sub: 0,
      adult: 70,
      total: 110,
    },
    Diet: "Carnivore",
    SprintDuration: "3:40",
    icon: "allosaurus",
  },
  {
    Name: "Ceratosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/6/66/Ceratosaurus_The_Isle.jpeg",
    Damage: "350",
    Alt: "",
    gameMod: "survival",
    Health: "2250",
    Mass: "2250",
    Speed: "36.6",
    Ambush: "40.3",
    Bleed: "8",
    Growth: "150",
    SitBleedResist: 25,
    BleedResist: 80,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 30,
      juvie: 50,
      sub: 0,
      adult: 90,
      total: 150,
    },
    Diet: "Carnivore",
    SprintDuration: "2:30",
    icon: "cerato",
  },
  {
    Name: "Diabloceratops",
    image:
      "https://static.wikia.nocookie.net/isle/images/1/12/The_isle_diabloceratops_steam_isle_guide-2.jpg/",
    Damage: "350",
    Alt: "",
    gameMod: "survival",
    Health: "3250",
    Mass: "3250",
    Speed: "31.6",
    Ambush: "",
    Bleed: "18",
    Growth: "180",
    SitBleedResist: 25,
    BleedResist: 30,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 25,
      juvie: 80,
      sub: 0,
      adult: 100,
      total: 180,
    },
    SprintDuration: "2:30",
    icon: "styracosaurus",
  },
  {
    Name: "Dilophosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/f/f1/Dilophosaurus.jpeg/",
    Damage: "150",
    Alt: "",
    gameMod: "survival",
    Health: "1050",
    Mass: "1200",
    Speed: "38.8",
    Ambush: "45.5",
    Bleed: "50",
    Growth: "110",
    SitBleedResist: 10,
    BleedResist: 25,
    TrotBleedResist: 50,
    RunBleedResist: 100,
    growTime: {
      hatch: 20,
      juvie: 50,
      sub: 0,
      adult: 60,
      total: 110,
    },
    Diet: "Carnivore",
    SprintDuration: "2:30",
    icon: "guanlong",
  },
  {
    Name: "Dryosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/4/4c/The_isle_dryosaurus_new_2020.png",
    Damage: "20",
    Alt: "",
    Health: "500",
    gameMod: "survival",
    Diet: "Herbivore",

    Mass: "700",
    Speed: "41.5",
    Ambush: "",
    Bleed: "",
    Growth: "30",
    SitBleedResist: 25,
    BleedResist: 50,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 10,
      juvie: 15,
      sub: 0,
      adult: 15,
      total: 30,
    },
    SprintDuration: "4:10",
    icon: "plateosaurus",
  },
  {
    Name: "Gallimimus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/3/37/Gallimimus.jpeg/",
    Damage: "150",
    Alt: "",
    gameMod: "survival",
    Health: "800",
    Mass: "1000",
    Speed: "48.6",
    Ambush: "",
    Bleed: "",
    Growth: "90",
    SitBleedResist: 25,
    BleedResist: 70,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 15,
      juvie: 40,
      sub: 0,
      adult: 50,
      total: 90,
    },
    SprintDuration: "6:40",
    icon: "gallimimus",
  },
  {
    Name: "Giganotosaurus",
    Image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db9ed8c9-b18e-40d7-9b96-eb34d64138e6/df7ntko-6354b6be-af9e-4222-b69c-1ffa4cd1d72b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiOWVkOGM5LWIxOGUtNDBkNy05Yjk2LWViMzRkNjQxMzhlNlwvZGY3bnRrby02MzU0YjZiZS1hZjllLTQyMjItYjY5Yy0xZmZhNGNkMWQ3MmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QPvP0EDvB-ufd3pKldpaR7GYzUw5c1IzDzF5pArvlyY",
    Damage: "700",
    Alt: "",
    Health: "6000",
    gameMod: "survival",

    Mass: "6450",
    Speed: "30.6",
    Ambush: "39.8",
    Bleed: "40",
    Growth: "390",
    SitBleedResist: 15,
    BleedResist: 30,
    TrotBleedResist: 50,
    RunBleedResist: 80,
    growTime: {
      hatch: 30,
      juvie: 110,
      sub: 220,
      adult: 60,
      total: 390,
    },
    Diet: "Carnivore",
    SprintDuration: "0:50",
    icon: "t-rex",
  },
  {
    Name: "Herrerasaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/8/83/Herrerasaurus.jpeg",
    Damage: "50",
    Alt: "",
    Health: "500",
    gameMod: "progression",

    Mass: "500",
    Speed: "55.8",
    Ambush: "61.3",
    Bleed: "10",
    Growth: "80",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 20,
      sub: 0,
      adult: 60,
      total: 80,
    },
    Diet: "Carnivore",
    SprintDuration: "2:10",
    icon: "velociraptor",
  },
  {
    Name: "Maiasaura",
    Image:
      "https://static.wikia.nocookie.net/isle/images/4/42/Maiasaura_The_Isle.png",
    Damage: "175",
    Alt: "",
    Health: "2868",
    Mass: "2868",
    Speed: "44.6",
    gameMod: "progression",

    Ambush: "",
    Bleed: "",
    Growth: "110",
    SitBleedResist: 20,
    BleedResist: 25,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 20,
      juvie: 50,
      sub: 0,
      adult: 60,
      total: 110,
    },
    SprintDuration: "3:00",
    icon: "iguanodon",
  },
  {
    Name: "Pachycephalosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/b/b0/Pachycephalosaurus.jpeg",
    Damage: "350",
    Alt: "",
    gameMod: "survival",
    Health: "1300",
    Mass: "1300",
    Speed: "40",
    Ambush: "",
    Bleed: "",
    Growth: "130",
    SitBleedResist: 25,
    BleedResist: 30,
    TrotBleedResist: 100,
    RunBleedResist: 200,

    sprint: "2:55",
    bleedDamage: "n/a",
    growTime: {
      hatch: 20,
      juvie: 70,
      sub: 0,
      adult: 60,
      total: 130,
    },
    icon: "parasaurolophus",
  },
  {
    Name: "Parasaurolophus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/f/f6/Parasaurolophus_The_Isle.jpg",
    Damage: "250",
    Alt: "750",
    Health: "3600",
    gameMod: "survival",

    Mass: "3600",
    Speed: "34.2",
    Ambush: "",
    Bleed: "",
    Growth: "180",
    SitBleedResist: 20,
    BleedResist: 30,
    TrotBleedResist: 50,
    RunBleedResist: 80,
    growTime: {
      hatch: 25,
      juvie: 60,
      sub: 0,
      adult: 120,
      total: 180,
    },
    SprintDuration: "4:10",
    icon: "parasaurolophus",
  },
  {
    Name: "Tyrannosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/2/27/Tyrannosaurus_The_Isle_2020.jpeg",
    Damage: "1200",
    Alt: "",
    Health: "6500",
    Mass: "5800",
    gameMod: "survival",
    Diet: "Carnivore",
    Speed: "33.2",
    Ambush: "43.1",
    Bleed: "10",
    Growth: "380",
    SitBleedResist: 10,
    BleedResist: 30,
    TrotBleedResist: 50,
    RunBleedResist: 70,
    growTime: {
      hatch: 30,
      juvie: 100,
      sub: 180,
      adult: 100,
      total: 380,
    },
    SprintDuration: "0:33",
    icon: "t-rex",
  },
  {
    Name: "Shantungosaurus",
    Image: "https://static.wikia.nocookie.net/isle/images/4/4c/Shant.jpg",
    Damage: "250",
    Alt: "1100",
    gameMod: "progression",
    Health: "11793",
    Mass: "11793",
    Speed: "32.5",
    Ambush: "",
    Bleed: "",
    Growth: "360",
    SitBleedResist: 25,
    BleedResist: 40,
    TrotBleedResist: 100,
    RunBleedResist: 200,
    growTime: {
      hatch: 0,
      juvie: 120,
      sub: 0,
      adult: 240,
      total: 360,
    },
    SprintDuration: "0:46",
    icon: "iguanodon",
  },
  {
    Name: "Spinosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/8/82/Spinosaurus_The_Isle.png",
    Damage: "250",
    Alt: "",
    gameMod: "progression",
    Diet: "Carnivore",
    Health: "9071",
    Mass: "9071",
    Speed: "29.3",
    Ambush: "35.1",
    Bleed: "18",
    Growth: "360",
    SitBleedResist: 20,
    BleedResist: 50,
    TrotBleedResist: 80,
    RunBleedResist: 125,
    growTime: {
      hatch: 0,
      juvie: 180,
      sub: 0,
      adult: 180,
      total: 360,
    },
    SprintDuration: "0:30",
    icon: "spinosaurus",
  },
  {
    Name: "Stegosaurus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/5/51/The_isle_stegosaurus_new_2020.jpeg/",
    Damage: "1200",
    Alt: "",
    gameMod: "progression",
    Health: "4883",
    Mass: "4883",
    Speed: "26.3",
    Ambush: "",
    Bleed: "30",
    Growth: "240",
    SitBleedResist: "unknown",
    BleedResist: "unknown",
    TrotBleedResist: "unknown",
    RunBleedResist: "unknown",
    growTime: {
      hatch: 0,
      juvie: 120,
      sub: 0,
      adult: 120,
      total: 240,
    },
    SprintDuration: "1:30",
    icon: "stegosaurus",
  },
  {
    Name: "Suchomimus",
    Image:
      "https://static.wikia.nocookie.net/isle/images/7/79/Screenshot_%2881%29.png/",
    Damage: "350",
    gameMod: "survival",
    Alt: "",
    Health: "3600",
    Mass: "3600",
    Speed: "30.9",
    Ambush: "39.3",
    Bleed: "20",
    Growth: "235",
    SitBleedResist: 20,
    BleedResist: 25,
    TrotBleedResist: 80,
    RunBleedResist: 100,
    sprint: "3:20",
    bleedDamage: 20,
    growTime: {
      hatch: 20,
      juvie: 85,
      sub: 0,
      adult: 150,
      total: 235,
    },
    Diet: "Carnivore",
    icon: "ouranosaurus",
  },
  {
    Name: "Triceratops",
    Image:
      "https://static.wikia.nocookie.net/isle/images/2/2d/Trikeremodel.png",
    Damage: "360",
    Alt: "850",
    Diet: "Herbivore",
    Health: "8200",
    gameMod: "survival",
    Mass: "8300",
    Speed: "25.34",
    Ambush: "",
    Bleed: "20",
    Bleed2: "25",
    Growth: "360",
    SitBleedResist: 20,
    BleedResist: 40,
    TrotBleedResist: 90,
    RunBleedResist: 180,
    growTime: {
      hatch: 30,
      juvie: 60,
      sub: 200,
      adult: 100,
      total: 360,
    },
    SprintDuration: "1:06",
    icon: "triceratops",
  },
  {
    Name: "Utahraptor",
    Image:
      "https://static.wikia.nocookie.net/isle/images/8/82/Spinosaurus_The_Isle.png",
    Damage: "200",
    Alt: "",
    Health: "1200",
    Mass: "1000",
    gameMod: "survival",

    Speed: "43.2",
    Ambush: "56",
    Bleed: "20",
    Growth: "100",
    SitBleedResist: 10,
    BleedResist: 20,
    TrotBleedResist: 50,
    RunBleedResist: 70,
    growTime: {
      hatch: 20,
      juvie: 50,
      sub: 0,
      adult: 50,
      total: 100,
    },
    Diet: "Carnivore",
    Diet: "Carnivore",
    SprintDuration: "5:00",
    icon: "velociraptor",
  },
];

dinos.forEach((dino) => {
  dino.Diet_Icon = dino.Diet === "Carnivore" ? "🍖" : "🌿";
});
//POPULATE SELECT ID=selectYourDino OPTIONS INSIDE WITH ALL DINOSAURS NAMES
const selectYourDino = document.querySelector(".selectYourDino");
const selectEnemyDino = document.querySelector(".selectEnemyDino");
const friendly = document.getElementById("friendly");
const enemy = document.getElementById("enemy");

const populateSelect = (select, array) => {
  for (let i = 0; i < array.length; i++) {
    const option = document.createElement("option");
    option.value = array[i].Name;
    option.text = array[i].Name;
    select?.appendChild(option);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  populateSelect(selectYourDino, dinos);
  populateSelect(selectEnemyDino, dinos);
  getDino_();
});

function updateDinoStats(selectedDino, target) {
  const dino = dinos.find((d) => d.Name === selectedDino);
  console.log(`🚀 ~ file: index.js:562 ~ updateDinoStats ~ dino:`, dino);
  if (dino) {
    target.innerHTML = buildDinoHTML(dino);
  }
  return dino;
}
function getDino_() {
  document.addEventListener("change", function getDino(e) {
    const selectedDino = selectYourDino.value;
    const selectedEnemyDino = selectEnemyDino.value;

    if (e.target === selectYourDino || e.target === selectEnemyDino) {
      const friendlyDino = updateDinoStats(selectedDino, friendly);
      const enemyDino = updateDinoStats(selectedEnemyDino, enemy);

      if (friendlyDino && enemyDino) {
        DamageCalc(friendlyDino, enemyDino);
      }
    }
  });
}

function getStars(damage) {
  let stars = 0;
  if (damage < 100) {
    stars = 1;
  } else if (damage >= 100 && damage < 150) {
    stars = 1;
  } else if (damage >= 150 && damage < 200) {
    stars = 2;
  } else if (damage >= 200 && damage < 300) {
    stars = 3;
  } else if (damage >= 300 && damage < 1000) {
    stars = 4;
  } else if (damage >= 600) {
    stars = 5;
  } else if (damage > 1000) {
    stars = 6;
  }
  return stars;
}

function buildDinoHTML(dino) {
  const stars = getStars(dino.Damage);
  let starHTML = "";
  for (let i = 0; i < stars; i++) {
    starHTML += '<img src="../img/star.png">';
  }

  const dinoStory = `Ataque especial: ${dino.Alt}. Massa: ${dino.Mass}. Velocidade: ${dino.Speed}. Emboscada: ${dino.Ambush}. Sangramento: ${dino.Bleed}. Crescimento: ${dino.Growth}. Resistência ao Sangramento (Sentado): ${dino.SitBleedResist}. Resistência ao Sangramento: ${dino.BleedResist}. Resistência ao Sangramento (Trote): ${dino.TrotBleedResist}. Resistência ao Sangramento (Corrida): ${dino.RunBleedResist}. Dano: ${dino.Damage}. Vida: ${dino.Health}.`;

  return `<div id="container">
  <div class="card">

    <h5 class="monster-name">${dino.Name} <span class='diet-icon'>${dino.Diet_Icon}</span></h5>


  <div class="level">
  ${starHTML}
</div>
<div class="monster-image">
<img src="${dino.Image}" alt="${dino.Alt}">
</div>


<div class="description">
<p class="type">${dino.Diet}</p>
<p>Info: ${dinoStory} </p>

<p class="atk-def">Dano/ ${dino.Damage} Vida/${dino.Health}</p>
      </div>
</div>

  </div>`;
}

const DamageCalc = (cacador, presa) => {
  const {
    Name: nomeCacador,
    Health: vidaCacador,
    Mass: pesoCacador,
    Damage: danoCacador,
    Bleed: sangramentoCacador,
    BleedResist: resistenciaSangramentoCacador,
    SitBleedResist: resistenciaSangramentoSentadoCacador,
    TrotBleedResist: resistenciaSangramentoTroteCacador,
    RunBleedResist: resistenciaSangramentoCorridaCacador,
  } = cacador;
  console.log(`🚀 ~ file: index.js:600 ~ DamageCalc ~ cacador:`, cacador);

  const {
    Name: nomePresa,
    Health: vidaPresa,
    Mass: pesoPresa,
    Damage: danoPresa,
    Bleed: sangramentoPresa,
    BleedResist: resistenciaSangramentoPresa,
    SitBleedResist: resistenciaSangramentoSentadoPresa,
    TrotBleedResist: resistenciaSangramentoTrotePresa,
    RunBleedResist: resistenciaSangramentoCorridaPresa,
  } = presa;
  console.log(`🚀 ~ file: index.js:607 ~ DamageCalc ~ presa:`, presa);

  const res =
    (Number(vidaCacador) / Number(danoPresa)) *
    (Number(pesoPresa) / Number(pesoCacador));
  console.log("vidaCacador:", vidaCacador);
  console.log("danoPresa:", danoPresa);
  console.log("pesoPresa:", pesoPresa);
  console.log("pesoCacador:", pesoCacador);

  console.log(`🚀 ~ file: index.js:654 ~ DamageCalc ~ res:`, res);
  const resReverso =
    Number(vidaPresa) /
    ((Number(danoCacador) * Number(pesoCacador)) / Number(pesoPresa));

  atualizaHTML(
    "fightResultreverse",
    `A presa ${nomePresa} consegue eliminar o caçador ${nomeCacador} em aproximadamente ${res.toFixed(
      2
    )} ataques`
  );
  atualizaHTML(
    "fightResult",
    `O caçador ${nomeCacador} consegue eliminar a presa ${nomePresa} em aproximadamente ${resReverso.toFixed(
      2
    )} ataques`
  );

  const resistenciaSangramentoCacadorCalculada = {
    normal: calculaResistenciaSangramento(
      pesoCacador,
      pesoPresa,
      sangramentoCacador,
      resistenciaSangramentoPresa
    ),
    sentado: calculaResistenciaSangramento(
      pesoCacador,
      pesoPresa,
      sangramentoCacador,
      resistenciaSangramentoSentadoPresa
    ),
    trote: calculaResistenciaSangramento(
      pesoCacador,
      pesoPresa,
      sangramentoCacador,
      resistenciaSangramentoTrotePresa
    ),
    corrida: calculaResistenciaSangramento(
      pesoCacador,
      pesoPresa,
      sangramentoCacador,
      resistenciaSangramentoCorridaPresa
    ),
  };

  const resistenciaSangramentoPresaCalculada = {
    normal: calculaResistenciaSangramento(
      pesoPresa,
      pesoCacador,
      sangramentoPresa,
      resistenciaSangramentoCacador
    ),
    sentado: calculaResistenciaSangramento(
      pesoPresa,
      pesoCacador,
      sangramentoPresa,
      resistenciaSangramentoSentadoCacador
    ),
    trote: calculaResistenciaSangramento(
      pesoPresa,
      pesoCacador,
      sangramentoPresa,
      resistenciaSangramentoTroteCacador
    ),
    corrida: calculaResistenciaSangramento(
      pesoPresa,
      pesoCacador,
      sangramentoPresa,
      resistenciaSangramentoCorridaCacador
    ),
  };
  console.log(
    `🚀 ~ file: index.js:672 ~ DamageCalc ~ resistenciaSangramentoPresaCalculada:`,
    resistenciaSangramentoPresaCalculada
  );

  atualizaHTML(
    "fightBleed",
    `O caçador ${nomeCacador} consegue sangrar a presa ${nomePresa} normalmente em`,
    resistenciaSangramentoCacadorCalculada.normal
  );
  atualizaHTML(
    "fightBleedsit",
    `O caçador ${nomeCacador} consegue sangrar a presa ${nomePresa} descansando em ${resistenciaSangramentoCacadorCalculada.sentado.toFixed(
      2
    )}, por ataque básico`
  );
  atualizaHTML(
    "fightBleedtrot",
    `O caçador ${nomeCacador} consegue sangrar a presa ${nomePresa} trotando em ${resistenciaSangramentoCacadorCalculada.trote.toFixed(
      2
    )}, por ataque básico`
  );
  atualizaHTML(
    "fightBleedrun",
    `O caçador ${nomeCacador} consegue sangrar a presa ${nomePresa} correndo em ${resistenciaSangramentoCacadorCalculada.corrida.toFixed(
      2
    )}, por ataque básico`
  );

  atualizaHTML(
    "fightBleedreverse",
    `A presa ${nomePresa} consegue revidar o caçador ${nomeCacador} normalmente em ${resistenciaSangramentoPresaCalculada.normal.toFixed(
      2
    )}, por ataque básico`
  );
  atualizaHTML(
    "fightBleedsitreverse",
    `A presa ${nomePresa} consegue revidar o caçador ${nomeCacador} descansando em ${resistenciaSangramentoPresaCalculada.sentado.toFixed(
      2
    )}, por ataque básico`
  );
  atualizaHTML(
    "fightBleedtrotreverse",
    `A presa ${nomePresa} consegue revidar o caçador ${nomeCacador} trotando em ${resistenciaSangramentoPresaCalculada.trote.toFixed(
      2
    )}, por ataque básico`
  );
  atualizaHTML(
    "fightBleedrunreverse",
    `A presa ${nomePresa} consegue revidar o caçador ${nomeCacador} correndo em ${resistenciaSangramentoPresaCalculada.corrida.toFixed(
      2
    )}, por ataque básico`
  );
};

function atualizaHTML(idElemento, texto, valor) {
  const elemento = document.getElementById(idElemento);
  elemento.style =  {

  }

  if (elemento) {
    if (typeof valor === "number") {
      elemento.innerHTML = `${texto} ${valor.toFixed(2)}`;
    } else {
      elemento.innerHTML = texto;
    }
  } else {
    console.error(`Elemento com id ${idElemento} não encontrado.`);
  }
}

// Então você chama assim:

let calculaResistenciaSangramento = (
  pesoAtacante,
  pesoDefensor,
  sangramentoAtacante,
  resistenciaSangramentoDefensor
) => {
  //check if  params are numbers
  const isNumber = (value) => typeof value === "number" && isFinite(value);
  if (
    !isNumber(pesoAtacante) ||
    !isNumber(pesoDefensor) ||
    !isNumber(sangramentoAtacante) ||
    !isNumber(resistenciaSangramentoDefensor)
  ) {
    return "informação não disponível atualmente";
  }

  pesoAtacante = Number(pesoAtacante);
  pesoDefensor = Number(pesoDefensor);
  sangramentoAtacante = Number(sangramentoAtacante);
  resistenciaSangramentoDefensor = Number(resistenciaSangramentoDefensor);

  let resultado =
    (pesoAtacante / pesoDefensor) * sangramentoAtacante -
    resistenciaSangramentoDefensor;

  return isNaN(resultado) ? "informação não disponível atualmente" : resultado;
};

const _dinos = dinos;
export { _dinos as dinos };
