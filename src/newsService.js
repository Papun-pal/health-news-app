// const API_KEY = 'eb7a57e2caf146c394917985bbfe943c';
// const API_URL = 'https://newsapi.org/v2/everything';
// // const API_URL = `https://newsapi.org/v2/everything?q=${category}&apiKey=YOUR_API_KEY`;


// export const fetchNews = async (query) => {
//     try {
//         const response = await fetch(`${API_URL}?q=${query}&apiKey=${API_KEY}`);
//         const data = await response.json();
//         return data.articles;
//     } catch (error) {
//         console.error('Error fetching news:', error);
//         return [];
//     }
// };

export const fetchNews = async (category) => {
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const API_URL = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;
    
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.articles; 
    } catch (error) {
      console.error('Failed to fetch news:', error);
      return []; 
    }
  };
  