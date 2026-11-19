import { useState } from 'react';
import { TextField } from './TextField';
import { parseReference } from './reference';
import { 
  books,
} from './books'

export default function App() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [url, setUrl] = useState('');
  
  const suggestions = 
    books
  .filter((book) =>
    {
      if (search.length < 1) return

      return book.name.toLowerCase().includes(search.toLowerCase())
    }
   );

  function selectBook(name: string) {
    setSearch(`${name} `);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = parseReference(search);

    if (!result) {
      setUrl('');
      setError('Referencia bíblica inválida.');
      return;
    }

    setError('');
    setUrl(result.url);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 360,
        margin: '3rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >

    <div className="autocomplete">

      <TextField
        label="Cita bíblica"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        required
      />

      <div className="options">

      {suggestions.map((book) => (
        <button
          key={book.slug}
          type="button"
          className="option"
          onPointerDown ={(e)=>e.preventDefault()}
          onClick={() => selectBook(book.name)}
        >
          {book.name}
        </button>
      ))}

      </div>

      </div>

      <button type="submit" className="btn">
        ⚲
      </button>

      {error && <p role="alert">{error}</p>}

      {url && (
        <a href={url} target="_blank" rel="noreferrer">
        {url}
        </a>
      )}
    </form>
  );
}

