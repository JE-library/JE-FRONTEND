
import PagesLayout from '../Layouts/PagesLayout'

function Books() 
 {
  
  const books = [
    { id: 1, title: "Ghanaian Foods", author: "chef Brace" },
    { id: 2, title: "Japenese Foods", author: "Chef Efua" },
    { id: 3, title: "Coffee Recipes", author: "Chef Jackie" },
    { id: 3, title: "Weight Loss Recipes", author: "Chef Josephine" },

  ];


  return ( <PagesLayout>
<div style={{ padding: '1rem' }}>
        <h1>Dicsover All Our Recipe Books</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: '1rem' }}>
              <div style={{ fontWeight: 'bold' }}>{book.title}</div>
              <div style={{ color: 'red' }}>by {book.author}</div>
            </li>
          ))}
        </ul>
      </div>
  </PagesLayout>
  
  );
};

export default Books;