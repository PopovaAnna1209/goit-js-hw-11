import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25261319-41493d7d09d351884ef55fa82';

export default class NewsApiService {
    constructor() {
      this.searchQuery = '';
      this.perPage = 40;
      this.page = 1;
    };

async makesRequest () {
        const params = new URLSearchParams({
            key: API_KEY,   //ключ IPI 
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: this.pageAmount,
            per_page: this.perPage,
        });
        const url = `${BASE_URL}/?${params}`;
        this.incrementPage();
        return await axios.get(url);
    }; 

    incrementPage() {
        this.page += 1;           //Добавление сл.страницы/увеличение
    }

    resetPage() {
        this.page = 1;            //След.поиск с 1 стр./сброс
    }

    get query() {
        return this.searchQuery;
    }
                                                //Контролирует термин запроса
    set query(newQuery) {
        this.searchQueary = newQuery;
    }
}
