import { useState, useEffect, useRef } from 'react';
import { TextField } from './TextField';

type SearchB0xProps<T> = {
  iterable: T[];
  property: { [K in keyof T]: T[K] extends string ? K : never }[keyof T];
  searchHandler: (value: string) => void;
  search: string;
  label: string,
};


export function SearchB0x<T extends Record<string, any>>({
  iterable,
  property,
  searchHandler,
  search,
  label,
}: SearchB0xProps<T>){

  const optionsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (activeIndex < 0) return;

    const active = optionsRef.current?.children[activeIndex];

    active?.scrollIntoView({
      block: 'nearest',
    });

  }, [activeIndex]);


  const suggestions = search.length < 1
    ? []
    : iterable.filter((item) =>
        item[property].toLowerCase().includes(search.toLowerCase())
      )


  function select(name: string) {
    searchHandler(`${name} `);
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
        select(suggestions[activeIndex][property])
      }
        break

      case 'Escape':
        setActiveIndex(-1)
        break

      default:
        break;
    }
  }


  return (<>

    <div className="autocomplete">

      <TextField
        label={label}
        type="search"
        value={search}
        onChange={(e) => {
          searchHandler(e.currentTarget.value)
          setActiveIndex(-1)
        }}
        onKeyDown={handleKeyDown}
        required
      />

      <div className="options" ref={optionsRef}>

        {suggestions.map((item, index) => (
          <button
            key={`${item[property]}-${index}`}
            type="button"
            tabIndex={-1}
            className={`option ${index === activeIndex ? 'active' : ''}`}
            onPointerDown ={(e)=>e.preventDefault()}
            onClick={() => select(item[property])}
          >
            {item[property]}
          </button>
        ))}

      </div>

    </div>

    <button type="submit" className="btn">
      ⚲
    </button>

  </>);
}


