import { alienPlanets } from "./alienPlanets.js";

import(alienPlanets);

const planets = document.querySelector("#planets");
for (let planet of alienPlanets) {
	createBox(planet.id, planet.name, planet.emoji);
}
function createBox(id, name, emoji) {
	const subPlanets = document.createElement("div");
	const h3 = document.createElement("h3");
	const p = document.createElement("p");
	subPlanets.id = id;
	h3.textContent = name;
	p.textContent = emoji;
	subPlanets.appendChild(h3);
	subPlanets.appendChild(p);
	planets.appendChild(subPlanets);
}
console.log(planets);
