import { books } from './books';

const BASE_URL =
  'https://materialknight.github.io/doctrina-catolica/biblia-straubinger';

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\s+/g, ' ')
    .trim();
}


//function normalize(value: string): string {
//  return value
//    .normalize('NFD')
//    .replace(/[\u0300-\u036f]/g, '')
//    .toLowerCase()
//    .replace(/[.,]/g, '')
//    .replace(/\s+/g, ' ')
//    .trim();
//}

export interface BibleReference {
  book: string;
  chapter: number;
  verse: number;
  url: string;
}

export function parseReference(
  input: string,
): BibleReference | null {
  const value = normalize(input);

  // Admite:
  // Romanos 3:4
  // 2 Macabeos 8:20
  // 2 Juan 11
  //const match = value.match(/^(.+?)\s+(\d+)(?::(\d+))?$/);

  //genesis 6:20
  //genesis 6: 20
  //genesis 6,20
  //genesis 6, 20
  //genesis 6
  //genesis 6:

  const match = value.match(/^(.+?)\s+(\d+)(?:\s*[:,]\s*(\d+))?$/);

  if (!match) return null;

  const [, bookName, firstNumber, secondNumber] = match;

  const book = books.find((book) =>
    [book.name, ...book.aliases].some(
      (alias) => normalize(alias) === bookName,
    ),
  );

  if (!book) return null;

  const first = Number(firstNumber);
  const second = secondNumber ? Number(secondNumber) : 1;

  // Si el libro tiene un solo capítulo, se interpreta
  // el número como versículo.
  const chapter = book.chapters.length === 1 ? 1 : first;
  const verse = book.chapters.length === 1 ? first : second;

  if (
    !Number.isInteger(chapter) ||
    !Number.isInteger(verse) ||
    chapter < 1 ||
    verse < 1
  ) {
    return null;
  }

  const maxVerses = book.chapters[chapter - 1];

  if (!maxVerses || verse > maxVerses) return null;

  const fragment =
    book.chapters.length === 1
      ? `v${verse}`
      : `c${chapter}-v${verse}`;

  return {
    book: book.name,
    chapter,
    verse,
    url: `${BASE_URL}/${book.slug}#${fragment}`,
  };
}
