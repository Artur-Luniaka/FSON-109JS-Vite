import { fetchData } from './api.js';

const listEvent = document.querySelector('.list');

function createMarkup(array) {
  const markup = array
    .map(
      ({ name, id }) => `
      <li id="${id}">
        <p id="${id}">${name}</p>
      </li>
    `
    )
    .join('');

  listEvent.innerHTML = markup;
}

async function renderEvents(page) {
  const data = await fetchData(page);
  console.log(data._embedded.events);
  createMarkup(data._embedded.events);
}

renderEvents(1);
