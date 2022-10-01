import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29199208-e8f4a754c941d66b2576f6db3';
async function fetchImages(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}
export default fetchImages;
