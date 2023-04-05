const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33786160-2c53079601ad7620441dee1b3';

export function fetchImages(searchValue, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type:"photo",
    orientation: "horizontal",
    page: page,
    per_page: 12
  });

  return fetch((`${BASE_URL}?${searchParams}`)).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json()
  })
}