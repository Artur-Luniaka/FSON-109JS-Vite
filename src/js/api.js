// Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
// API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
// Потрібно відрендерити колекцію  івентів і реалізувати пагінацію за допомогою бібліотеки
// tui - pagination(https://www.npmjs.com/package/tui-pagination),
// Запити робимо використовуючи бібліотеку axios (https://www.npmjs.com/package/axios , https://axios-http.com/uk/docs/intro)
// і конструкції async\await; try\catch

import axios from "axios";

const baseUrl = "https://app.ticketmaster.com/discovery/v2/";
const apiKey = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';

async function fetchData(page) {
    const responce = await axios.get(`${baseUrl}events.json?apikey=${apiKey}&page=${page}`);
    console.log(responce.data);
    return responce.data;
}

fetchData(1);