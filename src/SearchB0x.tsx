import { useState, useEffect } from 'react';
import { TextField } from './TextField';

type SearchBoxProps<T> = {
  optionsRef: React.RefObject<HTMLDivElement | null>;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  iterable: T[];
  property: keyof T;
  setSearch: (value: string) => void;
  search: string;
};



export function SearchB0x<T extends Record<string, any>>({
  optionsRef,
  handleSubmit,
  iterable,
  property,
  setSearch,
  search
}: SearchBoxProps<T>){

  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (activeIndex < 0) return;

    const active = optionsRef.current?.children[activeIndex];

    active?.scrollIntoView({
      block: 'nearest',
    });
  }, [activeIndex]);

  
  const suggestions = 
    iterable
  .filter((item) =>
    {
      if (search.length < 1) return

      return item[property].toLowerCase().includes(search.toLowerCase())
    }
   );

  function selectBook(name: string) {
    setSearch(`${name} `);
  }


  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!suggestions.length) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((i) => (i+1) % suggestions.length)
        break;

      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((i)=>
          i <= 0
          ? suggestions.length - 1
          : i-1
        )
        break

      case 'Enter':
        if (activeIndex >= 0) {
        e.preventDefault()
        selectBook(suggestions[activeIndex].name)
      }
        break

      case 'Escape':
        setActiveIndex(-1)
        break


      default:
        break;
    }
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
        onChange={(e) => {
          setSearch(e.currentTarget.value)
          setActiveIndex(-1)
        }}
        onKeyDown={handleKeyDown}
        required
      />

      <div className="options" ref={optionsRef}>

      {suggestions.map((item, index) => (
        <button
          key={item[property]}
          type="button"
          tabIndex={-1}
          className={`option ${index === activeIndex ? 'active' : ''}`}
          onPointerDown ={(e)=>e.preventDefault()}
          onClick={() => selectBook(item[property])}
        >
          {item.name}
        </button>
      ))}

      </div>

    </div>

      <button type="submit" className="btn">
        ⚲
      </button>

    </form>
  );
}


