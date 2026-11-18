import type {BibleBook} from './types'
export const books = [
  {
    name: 'Romanos',
    slug: 'romanos',
    aliases: ['romanos', 'rom'],
    chapters: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
  },
  {
    name: '2 Juan',
    slug: '2-juan',
    aliases: ['2 juan', 'ii juan'],
    chapters: [13],
  },
  {
    name: '2 Macabeos',
    slug: '2-macabeos',
    aliases: ['2 macabeos', 'ii macabeos'],
    chapters: [
      36, 32, 40, 50, 27, 31, 42, 36, 29, 38, 38, 45, 26, 46, 39,
    ],
  },
] satisfies BibleBook[];


export const bookOptions = books.map((book) => book.name);

