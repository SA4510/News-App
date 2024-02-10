import axios from "axios";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=in&apiKey=4916fc022ba742a18b79c8552c28b628&q=india")
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  };

  const handleMainNewsClick = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <>
      <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}> Daily-Hunt </button>
      </div>
      <div className="container">
        <div className="row">
          {data.length > 0 ? (
            data.map((value, index) => (
              <div key={index} className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt={value.title} />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <button
                      onClick={() => handleMainNewsClick(value.url)}
                      className="btn btn-primary" >
                      Headline Page
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No news data available.</p>
          )}
        </div>
      </div>
    </>
  );
}
