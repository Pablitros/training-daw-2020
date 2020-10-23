'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];


// function mapIds() { return pilots.map(value => value.id); }

// console.log(mapIds());

// function rebels() { pilots.filter(value => value.faction === "Rebels"); }

// console.log(rebels());

function totalFaction(faction) { let pilotos = pilots.filter(value => value.faction == faction).reduce((total, value) => total + value); }
console.log(totalFaction('Rebels'));


totalFaction("Rebels");

function totalFaction(faction) { 
  return pilots.filter(value => value.faction == faction); 
}

console.log(totalFaction("Rebels"));

function avgYears(faction) {
  let pilotos = pilots.filter(value => value.faction == faction).map(value => value.years); return pilotos.reduce((total, value) => total + value) / pilotos.length;
}






try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}