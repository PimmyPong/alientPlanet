import { alienPlanets } from "./alienPlanets.js";

import(alienPlanets);

const planets = document.querySelector("#planets");
for (let planet of alienPlanets) {
	box(planet.id, planet.name, planet.emoji);
}
function box(id, name, emoji) {
	const eachPlanets = document.createElement("div");
	const h3 = document.createElement("h3");
	const p = document.createElement("p");
	eachPlanets.id = id;
	h3.textContent = name;
	p.textContent = emoji;
	eachPlanets.appendChild(h3);
	eachPlanets.appendChild(p);
	planets.appendChild(eachPlanets);
}
