import { renderEvents } from "./event";
import { page } from "./pagination";
import { listEvent } from "./event";

const searchForm = document.querySelector('.searchForm');

export let keyword = '';

function handleSearch(event) {
    event.preventDefault();
    keyword = event.target.elements.searchField.value;
    listEvent.innerHTML = "";
    renderEvents(page, keyword);
    searchForm.reset();
}

searchForm.addEventListener('submit', handleSearch);