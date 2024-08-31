const API_KEY = 'eb7a57e2caf146c394917985bbfe943c';
const API_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query) => {
    try {
        const response = await fetch(`${API_URL}?q=${query}&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};
