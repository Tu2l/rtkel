import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Articles from './Components/Articles'
import Pagination from './Components/Pagination'
import { useState, useEffect } from 'react';
  

function App() {
  const [loading, setLoading] = useState(false);
  const [searchWord, setKeyword] = useState("india");
  const [articles, setArticles] = useState([]);
  const [pageData, setPageData] = useState({
    totalPage: -1,
    currentPage: 1,
    totalHits: -1
  });

  useEffect(() => {
    const getNews = async () => {
      console.log("init")

      const data = await fetchNews(searchWord)
      setPageData({
        totalPage: data.total_pages,
        currentPage: data.page,
        totalHits: data.total_hits
      })
      setArticles(data.articles)
    }
    getNews()

  }, [])

  const onPageChange = async (page) => {
    await onSearch(searchWord, page)
  }

  const onSearch = async (keyword, page = 1) => {
    // console.log("searching articles with keyword: " + keyword)
    setKeyword(keyword)
    setLoading(true)
    const data = await fetchNews(keyword, page)
    setPageData({
      totalPage: data.total_pages,
      currentPage: data.page,
      totalHits: data.total_hits
    })
    setArticles(data.articles)
    setLoading(false)
  }

  const fetchNews = async (keyword, page) => {
    const res = await fetch(`https://free-news.p.rapidapi.com/v1/search?page_size=20&q=${keyword}&lang=en&page=${page}`, {
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
      <Header />
      <SearchBar onSearch={onSearch} searchWord={searchWord} disableSearch={loading} />
      <Pagination pageData={pageData} onPageChange={onPageChange} />
      <Articles data={articles} />
      <Footer />
    </div>
  );
}


export default App;
