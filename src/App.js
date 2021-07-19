import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Articles from './Components/Articles'
import Pagination from './Components/Pagination'
import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core'


function App() {
  const [articles, setArticles] = useState([]);
  const [pageData, setPageData] = useState({
    totalPage: -1,
    currentPage: 1,
    totalHits: -1
  });

  useEffect(() => {
    const getNews = async () => {
      console.log("init")

      const data = await fetchNews("india")
      setPageData({
        totalPage: data.total_pages,
        currentPage:data.page,
        totalHits: data.total_hits
      })
      setArticles(data.articles)
    }
    getNews()

  }, [])

  const onSearch = async (keyword) => {
    console.log("searching articles with keyword: " + keyword)
    const data = await fetchNews(keyword)
    setPageData({
      totalPage: data.total_pages,
      currentPage:data.page,
      totalHits: data.total_hits
    })
    setArticles(data.articles)
  }

  const fetchNews = async (keyword) => {
    const res = await fetch(`https://free-news.p.rapidapi.com/v1/search?page_size=20&q=${keyword}&lang=en`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "lhdNV9RGfdmshZqPw1236k6HsEFqp15QRvjjsnXQIa7ssLO1to",
        "x-rapidapi-host": "free-news.p.rapidapi.com"
      }
    })

    const data = await res.json()
    console.log(data)
    return data
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={onSearch} />
      <Pagination pageData = {pageData} />
      <Articles data={articles} />
      <Footer />
    </div>
  );
}


export default App;
