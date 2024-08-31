import React, { useEffect, useState } from 'react';
import { fetchNews } from '../newsService';
import CategorySelector from './CategorySelector';
import Bookmark from './Bookmark';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('health');

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category);
      setArticles(data);
      setLoading(false);
    };
    getNews();
  }, [category]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <CategorySelector onCategoryChange={setCategory} />
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          <Bookmark article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;

