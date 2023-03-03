import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";
import Navbar from "Components/Navbar";
import Home from "Pages/Home";
import Error from "Pages/Error";

const App = () => {
 
  const [bookData, setBookData] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [numResults, setNumResults] = useState("");

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([]);

  //Serves to sort data by title
  useEffect(() => {
    if (searchResult) {
      const sorted = [...searchResult].sort((a, b) => {
        const titleA = a.volumeInfo.title.toUpperCase();
        const titleB = b.volumeInfo.title.toUpperCase();
        if (titleA < titleB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (titleA > titleB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
      setSortedData(sorted);
    }
  }, [searchResult, sortOrder]);

  // const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

  // const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  const handleSearch = (event) => {
    const book = event.target.value;
    setBookData(book);
  };

  const handleCapacity = (event) => {
    const num = event.target.value;
    setNumResults(num);
  };

  // // get request for the google book api
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.get(
  //       `${baseUrl}${bookData}&key=${apiKey}&maxResults=${numResults}`
  //     );

  //     setSearchResult(response.data.items);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Router>
      {/* ======== the nav bar appears on all pages  ======== */}

      {
        <Navbar
          numResults={numResults}
          handleCapacity={handleCapacity}
          handleSearch={handleSearch}
          setSortOrder={setSortOrder}
          bookData={bookData}
          sortOrder={sortOrder}
          setIsLoading={setIsLoading}
          setSearchResult={setSearchResult}
        />
      }

      <Routes>
        {/*=========== Each route is treated as a page    ============= */}
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route
          path="/"
          element={<Home sortedData={sortedData} isloading={isloading} />}
        />

        {/* ========== The * symbol will catch any errors made by the users and redirect them to his page    ============= */}
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
