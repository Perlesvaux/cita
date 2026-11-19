import { useState } from 'react';
import { parseReference } from './reference';
import { 
  books,
} from './books'

import { SearchB0x } from './SearchB0x'

export default function App() {

  const [state, setState] = useState({
    url:'',
    search:'',
    error:''
  })

  const {url, search, error} = state

  const searchHandler = (newSearch:string) => setState((prev)=> {return {...prev, search:newSearch}} )

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = parseReference(search);

    if (!result) {

      setState(prev => ({
        ...prev,
        url: '',
        error: 'Referencia bíblica inválida.',
      }));

      return;
    }

    setState((prev)=> {
      return {
        ...prev,
        error: '',
        url: result.url
      }
    })
  }

  return <>

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

    <SearchB0x 
      label="Cita bíblica"
      iterable={books}
      property="name"
      searchHandler={searchHandler}
      search={search}
    />

    {error && <p role="alert">{error}</p>}

    {url && (
      <a href={url} className="result-link" target="_blank" rel="noreferrer">
      {url}
      </a>
    )}

    </form>

  </>
}
