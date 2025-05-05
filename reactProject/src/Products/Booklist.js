import { useState } from "react";
import Books from "./Books"; 

function BooksList() {
  const [book,setbook] = useState([
    {
      id:1,
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781416554950/harry-a-history-9781416554950_hr.jpg",
      author: "shaik",
      year: "2006",
      price: 600,
      show:true
    },
    {
      id:2,
      image: "https://www.schandpublishing.com/uploads/bookimages/schand-books/9788121909358.jpg",
      author: "sabeer",
      year: "2026",
      price: 150,
      show:true
    },
    {  id:3,
      image: "https://th.bing.com/th/id/OIP.P9YLrMwz-THUbrC7Oo8hUAAAAA?rs=1&pid=ImgDetMain",
      author: "Ahamed",
      year: "2026",
      price: 100,
      show:true
    },
    {
      id:4,
      image: "https://th.bing.com/th/id/R.9d38714d6c50647e6d97a149b05e514e?rik=BebEdqrHeTxEjQ&riu=http%3a%2f%2fblog.online-spellcheck.com%2fwp-content%2fuploads%2f2015%2f12%2fEvolutionOfBooks.jpg&ehk=XpdOrN21Nq%2bUm5D6D0GIkDAFwDD93PXkwfgjXQkwTMM%3d&risl=&pid=ImgRaw&r=0",
      author: "mohammed",
      year: "2016",
      price: 322,
      show:false
    },
    {
      id:5,
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781416554950/harry-a-history-9781416554950_hr.jpg",
      author: "abbu",
      year: "2022",
      price: 900,
      show:true
    }
    
  ]);

  function handleDelete(id) {
    const newbook = book.filter((b) => b.id !== id);
    setbook(newbook);
  };
  
const listOfBooks = book.map((book, index) => (   
  <Books
  key={index}
  image={book.image}
  author={book.author}
  year={book.year}
  price={book.price}
  id={book.id}
  onDelete={handleDelete}
/>

  ));




  return <>{listOfBooks}</>;
}

export default BooksList;