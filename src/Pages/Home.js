import React from "react";
import Styles from "../Styles/Home.module.css";


const Home = ({sortedData, isloading}) => {
 console.log('This is sorted data',sortedData)
  
  return (
    <>


      {isloading ? (
        // Displays a title for the user to be introduced to
        <h2 className={Styles.WelcomeTitle}>
          Welcome to the "Book Inventory Project"
        </h2>
      ) : (
        // Checks for data
        // renders content onto page
        sortedData &&
        sortedData.map((book) => (
          <div key={book.id}>
            <ul className={Styles.BookContainer}>
              <li>
                <h3 className={Styles.BookTitles}>{book.volumeInfo.title}</h3>
                <div className={Styles.BookBulletPoints}>
                  <p>
                    Author(s): {Styles.BookAuthors}
                    {book.volumeInfo.authors?.join(", ")}
                  </p>
                  <p>Categories: {book.volumeInfo.categories}</p>
                  <p>Page Count: {book.volumeInfo.pageCount}</p>
                  <p>Publisher: {book.volumeInfo.publisher}</p>
                  <p>Published Date: {book.volumeInfo.publishedDate}</p>
                </div>

              

                <div className={Styles.ImageContainer}>
                  <a href={book.volumeInfo.previewLink}>
                  {/* Checks for data */}
                    {book.volumeInfo.imageLinks && (
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    )}
                  </a>
                  <p className={Styles.BookDescription}>
                    <strong>Description: </strong>
                    {book.volumeInfo.description}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        ))
      )}
    </>
  );
};

export default Home;



