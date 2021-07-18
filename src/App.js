import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Articles from './Components/Articles'
import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      console.log("init")

      const data = await fetchNews()
      setArticles(data.articles)
    }
    getNews()

  }, [])

  const onSearch = async (keyword) => {
    console.log("searching articles with keyword: " + keyword)
    const data = await fetchNews(keyword)
    setArticles(data.articles)
  }

  const fetchNews = async (keyword) => {
    const res = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${keyword}&lang=en`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "lhdNV9RGfdmshZqPw1236k6HsEFqp15QRvjjsnXQIa7ssLO1to",
        "x-rapidapi-host": "free-news.p.rapidapi.com"
      }
    })

    const data = await res.json()
    // console.log(data)
    return data
  }


  return (
    <div className="App">
      {/* <CssBaseline /> */}
      <Header />
      <SearchBar onSearch={onSearch}/>
      <Articles data={articles} />
      <Footer />
    </div>
  );
}


export default App;
