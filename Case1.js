const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },

  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

const fruitName = fruits.map((item) => {
  return item.fruitName.toLowerCase();
});
const sort = fruitName.sort();

//NO 1
console.log("---------------NO 1-----------------");
function sameFruit(fruit) {
  let name = [];
  let same = [];
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === fruit[i + 1]) {
      same.push(fruit[i]);
    } else {
      name.push(fruit[i]);
    }
  }

  console.log("Andi memiliki buah" + " " + name);
}

sameFruit(sort);

//NO 2
console.log("---------------NO 2-----------------");

let LOCAL = [];
let IMPORT = [];
function typefruit(fruit) {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].fruitType === "LOCAL") {
      LOCAL.push(fruit[i]);
    } else {
      IMPORT.push(fruit[i]);
    }
  }

  const Local = LOCAL.map((item) => {
    return item.fruitName;
  });

  let buahImport = [];
  const Import = IMPORT.map((item, i) => {
    buahImport.push(item.fruitName.toLowerCase());
  });
  buahImport.sort();

  let totalBuahImport = []
  for (let i = 0; i < buahImport.length; i++) {
    if (buahImport[i] === buahImport[i + 1]) {
      
    } else {
      totalBuahImport.push(buahImport[i]);
    }
  }

  let totalLocal = 0;
  let totalImport = 0;
  for (let i = 0; i < LOCAL.length; i++) {
    totalLocal = LOCAL[i].stock + totalLocal;
  }
  for (let i = 0; i < IMPORT.length; i++) {
    totalImport = IMPORT[i].stock + totalImport;
  }
  console.log("Buah local" + " " + Local);
  console.log("Buah import" + " " + totalBuahImport);

  //Soal NO 3
  console.log("---------------NO 3-----------------");
  console.log("Buah local" + " " + totalLocal);
  console.log("Buah import" + " " + totalImport);
}

function importType(fruit) {
  fruit.sort();
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] !== fruit[i + 1]) {
      IMPORT.push(fruit[i]);
      console.log(fruit[i]);
    }
  }
}

importType(IMPORT);

typefruit(fruits);
