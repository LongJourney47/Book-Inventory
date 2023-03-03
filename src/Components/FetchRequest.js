// import { useEffect, useState } from "react";
// import axios from "axios";

// const FetchRequest = () =>{
    


//         const [listData, setListData] = useState([]);
//         const [loading, setLoading] = useState(false);
//         const [error, setError] = useState("");
//         const url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
      
//         useEffect(() => {
//           setLoading(true);
//           axios
//             .get(`${url}`)
//             .then((response) => {
//               const bookData = response.data;
//               setListData(bookData);
//               console.log(bookData);
//             })
//             .catch((err) => {
//               console.log(err);
//               setError(err)
//             })
      
//           .finally(() => {
           
//             setLoading(false);
//           });
         
         
          
//         }, []);
      
//         useEffect(() => {
//           if (loading === false) {
//             localStorage.setItem("savedTodoList", JSON.stringify(listData));
//           }
//         }, [listData]);  

//     return(
//         <>
//         </>
//     )
// }


// export default FetchRequest;
