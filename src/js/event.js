import { fetchData } from './api.js';
import { page, reset } from './pagination.js';

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

export async function renderEvents(page) {
  const data = await fetchData(page);
  if (page === 1) reset(data.page.totalElements);
  console.log(data._embedded.events);
  createMarkup(data._embedded.events);
}

renderEvents(page);
