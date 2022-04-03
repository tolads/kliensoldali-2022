const API_KEY = "ae7a852a-e658-4904-bd7c-9389fe741c9e";

export const getImages = (limit) =>
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&size=thumb`,
    {
      headers: { "x-api-key": API_KEY },
    }
  ).then((response) => response.json());
