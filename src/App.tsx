//import { useState } from 'react';
//import { TextField } from './TextField';

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
        Buscar
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




//export default function App() {
//  const [search, setSearch] = useState('');
//
//  return (
//    <form
//      onSubmit={(e) => e.preventDefault()}
//      style={{
//        maxWidth: 360,
//        margin: '3rem auto',
//        display: 'flex',
//        flexDirection: 'column',
//        gap: '1.25rem',
//      }}
//    >
//      <TextField
//        label="cita"
//        type="search"
//        value={search}
//        onChange={(e) => setSearch(e.currentTarget.value)}
//        required
//      />
//    </form>
//  );
//}


//import { useState } from 'react'
//
//function App() {
//  const [search, setSearch] = useState("")
//
//  return (
//    <>
//    <div className="tray">
//
//      <div className="field">
//        <input 
//          type="text" 
//          id="search" 
//          placeholder="Mateo 6:7" 
//          value={search}
//          onChange={(e)=>setSearch(e.currentTarget.value)}
//        />
//        <label htmlFor="search">Busqueda</label>
//      </div>
//
//    </div>
//
//
//    </>
//  )
//}
//
//export default App
