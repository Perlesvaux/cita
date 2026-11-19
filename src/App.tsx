import { useState, useRef } from 'react';
import { parseReference } from './reference';
import { 
  books,
} from './books'

import { SearchB0x } from './SearchB0x'

export default function App() {

  const [search, setSearch] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const optionsRef = useRef<HTMLDivElement>(null);


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


  return <>

      <SearchB0x 
        optionsRef={optionsRef}
        handleSubmit={handleSubmit}
        iterable={books}
        property="name"
        setSearch={setSearch}
        search={search}
      />

      {error && <p role="alert">{error}</p>}

      {url && (
        <a href={url} className="result-link" target="_blank" rel="noreferrer">
        {url}
        </a>
      )}


  </>





//  const [search, setSearch] = useState('');
//  const [error, setError] = useState('');
//  const [url, setUrl] = useState('');
//  const [activeIndex, setActiveIndex] = useState(-1)
//  const optionsRef = useRef<HTMLDivElement>(null);
//
//
//useEffect(() => {
//  if (activeIndex < 0) return;
//
//  const active = optionsRef.current?.children[activeIndex];
//
//  active?.scrollIntoView({
//    block: 'nearest',
//  });
//}, [activeIndex]);
//
//
//  const suggestions = 
//    books
//  .filter((book) =>
//    {
//      if (search.length < 1) return
//
//      return book.name.toLowerCase().includes(search.toLowerCase())
//    }
//   );
//
//  function selectBook(name: string) {
//    setSearch(`${name} `);
//  }
//
//
//  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//    if (!suggestions.length) return
//
//    switch (e.key) {
//      case 'ArrowDown':
//        e.preventDefault()
//        setActiveIndex((i) => (i+1) % suggestions.length)
//        break;
//
//      case 'ArrowUp':
//        e.preventDefault()
//        setActiveIndex((i)=>
//          i <= 0
//          ? suggestions.length - 1
//          : i-1
//        )
//        break
//
//      case 'Enter':
//        if (activeIndex >= 0) {
//        e.preventDefault()
//        selectBook(suggestions[activeIndex].name)
//      }
//        break
//
//      case 'Escape':
//        setActiveIndex(-1)
//        break
//
//
//      default:
//        break;
//    }
//  }
//
//
//
//  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
//    e.preventDefault();
//
//    const result = parseReference(search);
//
//    if (!result) {
//      setUrl('');
//      setError('Referencia bíblica inválida.');
//      return;
//    }
//
//    setError('');
//    setUrl(result.url);
//  }
//
//  return (
//    <form
//      onSubmit={handleSubmit}
//      style={{
//        maxWidth: 360,
//        margin: '3rem auto',
//        display: 'flex',
//        flexDirection: 'column',
//        gap: '1.25rem',
//      }}
//    >
//
//    <div className="autocomplete">
//
//      <TextField
//        label="Cita bíblica"
//        type="search"
//        value={search}
//        onChange={(e) => {
//          setSearch(e.currentTarget.value)
//          setActiveIndex(-1)
//        }}
//        onKeyDown={handleKeyDown}
//        required
//      />
//
//      <div className="options" ref={optionsRef}>
//
//      {suggestions.map((book, index) => (
//        <button
//          key={book.slug}
//          type="button"
//          tabIndex={-1}
//          className={`option ${index === activeIndex ? 'active' : ''}`}
//          onPointerDown ={(e)=>e.preventDefault()}
//          onClick={() => selectBook(book.name)}
//        >
//          {book.name}
//        </button>
//      ))}
//
//      </div>
//
//      </div>
//
//      <button type="submit" className="btn">
//        ⚲
//      </button>
//
//      {error && <p role="alert">{error}</p>}
//
//      {url && (
//        <a href={url} className="result-link" target="_blank" rel="noreferrer">
//        {url}
//        </a>
//      )}
//    </form>
//  );
}

