// import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Styles from "../Styles/Navbar.module.css";
// import Home from "../Pages/Home";

const Navbar = ({
  numResults,
  setIsLoading,
  setSearchResult,
  handleCapacity,
  handleSearch,
  setSortOrder,
  bookData,
  sortOrder,
}) => {
  // const [bookData, setBookData] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [isloading, setIsLoading] = useState(true);
  // const [numResults, setNumResults] = useState("");

  // const [sortOrder, setSortOrder] = useState("asc");
  // const [sortedData, setSortedData] = useState([]);

  // //Serves to sort data by title
  // useEffect(() => {
  //   if (searchResult) {
  //     const sorted = [...searchResult].sort((a, b) => {
  //       const titleA = a.volumeInfo.title.toUpperCase();
  //       const titleB = b.volumeInfo.title.toUpperCase();
  //       if (titleA < titleB) {
  //         return sortOrder === "asc" ? -1 : 1;
  //       }
  //       if (titleA > titleB) {
  //         return sortOrder === "asc" ? 1 : -1;
  //       }
  //       return 0;
  //     });
  //     setSortedData(sorted);
  //   }
  // }, [searchResult, sortOrder]);

  const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

  const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  // const handleSearch = (event) => {
  //   const book = event.target.value;
  //   setBookData(book);
  // };

  // const handleCapacity = (event) => {
  //   const num = event.target.value;
  //   setNumResults(num);
  // };

  // get request for the google book api
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${baseUrl}${bookData}&key=${apiKey}&maxResults=${numResults}`
      );

      setSearchResult(response.data.items);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>
        <nav className={Styles.Navbar}>
          <section className={Styles.Title}>
            <p>Book Inventory</p>
          </section>

          {/* search field for application  */}
          <section className={Styles.Searchfield}>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className={Styles.Searchbar}
                  value={bookData}
                  placeholder="Book Search"
                  autoComplete="off"
                  onChange={handleSearch}
                  required
                ></input>
                <button type="submit" className={Styles.SubmitButton}>
                  Search
                </button>
              </form>
            </div>
          </section>

          <section className={Styles.Links}>
            <ul>
              <li>
                <Link className={Styles.LinkStyles} to="/">
                  Home
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </header>

      {/* Allows user to set the result amount */}
      <label className={Styles.BookResultNum}>
        Enter Result Amount Here
        <input
          type="number"
          name="num-input"
          required
          onChange={handleCapacity}
          value={numResults}
        ></input>
      </label>

      {/* Sort button */}
      <button
        className={Styles.SortBooks}
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Title {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>

      {/* <Home sortedData={sortedData} isloading={isloading}></Home> */}
    </>
  );
};

export default Navbar;
