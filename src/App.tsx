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
  
  const suggestions = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
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

      <TextField
        label="Cita bíblica"
        type="search"
        list="bible-books"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        required
      />

      {suggestions.map((book) => (
        <button
          type="button"
          onPointerDown={(e) => {
          e.preventDefault();
          selectBook(book.name);
        }}
        >
        {book.name}
        </button>
      ))}

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

