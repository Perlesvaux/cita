import { useState } from 'react';
import { TextField } from './TextField';
import { parseReference } from './reference';
import { bookOptions } from './books'

export default function App() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [url, setUrl] = useState('');

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

      <datalist id="bible-books">
      {bookOptions.map((book) => (
        <option key={book} value={book} />
      ))}
      </datalist>

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

