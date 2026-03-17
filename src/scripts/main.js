'use strict';

const populationNodes = [...document.querySelectorAll('.population')];
const parsePopulation = (str) => {
  if (typeof str !== 'string') {
    return NaN;
  }

  const num = Number(str.replace(',', '').trim());

  return !Number.isNaN(num) ? num : NaN;
};

const population = populationNodes.map((node) => {
  return parsePopulation(node.textContent);
});

const totalPopulation = population.reduce((acc, n) => acc + n, 0);
const averagePopulation = totalPopulation.length
  ? Math.round(totalPopulation / population.length)
  : NaN;

const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

if (average) {
  average.textContent = averagePopulation;
}

if (total) {
  total.textContent = totalPopulation;
}
