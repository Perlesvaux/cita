import type {BibleBook} from './types'
export const books = [

{
  name: 'Génesis',
  slug: 'genesis',
  aliases: ['génesis', 'genesis', 'gen', 'gn', 'gén'],
  chapters: [
    31, 25, 24, 26, 32, 22, 24, 22, 29, 32,
    32, 20, 18, 24, 21, 16, 27, 33, 38, 18,
    34, 24, 20, 67, 34, 35, 46, 22, 35, 43,
    55, 32, 20, 31, 29, 43, 36, 30, 23, 23,
    57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
  ],
},

{
  name: 'Éxodo',
  slug: 'exodo',
  aliases: ['éxodo', 'exodo', 'ex'],
  chapters: [
    22, 25, 22, 31, 23, 30, 25, 32, 35, 29,
    10, 51, 22, 31, 27, 36, 16, 27, 25, 26,
    36, 31, 33, 18, 40, 37, 21, 43, 46, 38,
    18, 35, 23, 35, 35, 38, 29, 31, 43, 38,
  ],
},

{
  name: 'Levítico',
  slug: 'levitico',
  aliases: ['levítico', 'levitico', 'lev'],
  chapters: [
    17, 16, 17, 35, 19, 30, 38, 36, 24,
    20, 47, 8, 59, 57, 33, 34, 16, 30,
    37, 27, 24, 33, 44, 23, 55, 46, 34,
  ],
},
{
  name: 'Números',
  slug: 'numeros',
  aliases: ['números', 'numeros', 'nm', 'núm', 'num'],
  chapters: [
    53, 34, 51, 49, 31, 27, 89, 26, 23, 36,
    35, 16, 33, 45, 41, 50, 13, 32, 22, 29,
    35, 41, 30, 25, 18, 65, 23, 31, 40, 17,
    54, 42, 56, 29, 34, 13,
  ],
},
{
  name: 'Deuteronomio',
  slug: 'deuteronomio',
  aliases: ['deuteronomio', 'deut', 'dt'],
  chapters: [
    46, 37, 29, 49, 33, 25, 26, 20, 29, 22,
    32, 32, 18, 29, 23, 22, 20, 22, 21, 20,
    23, 30, 25, 22, 19, 19, 26, 68, 29, 20,
    30, 52, 29, 12,
  ],
},
{
  name: 'Josué',
  slug: 'josue',
  aliases: ['josué', 'josue', 'jos'],
  chapters: [
    18, 24, 17, 24, 15, 27, 26, 35, 27, 43,
    23, 24, 33, 15, 63, 10, 18, 28, 51, 9,
    45, 34, 16, 33,
  ],
},
{
  name: 'Jueces',
  slug: 'jueces',
  aliases: ['jueces', 'jue'],
  chapters: [
    36, 23, 31, 24, 31, 40, 25, 35, 57, 18,
    40, 15, 25, 20, 20, 31, 13, 31, 30, 48,
    25,
  ],
},
{
  name: 'Rut',
  slug: 'rut',
  aliases: ['rut', 'rt'],
  chapters: [
    22, 23, 18, 22,
  ],
},
{
  name: '1 Samuel',
  slug: '1-samuel',
  aliases: ['1 samuel', 'i samuel', '1 sam', 'i reyes'],
  chapters: [
    28, 36, 21, 22, 12, 21, 17, 22, 27, 27,
    15, 25, 23, 52, 35, 23, 58, 30, 24, 42,
    16, 23, 28, 23, 43, 25, 12, 25, 11, 31,
    13,
  ],
},

{
  name: '2 Samuel',
  slug: '2-samuel',
  aliases: ['2 samuel', 'ii samuel', '2 sam', 'ii reyes'],
  chapters: [
    27, 32, 39, 12, 25, 23, 29, 18, 13, 19,
    27, 31, 39, 33, 37, 23, 29, 32, 44, 26,
    22, 51, 39, 25,
  ],
},

{
  name: '1 Reyes',
  slug: '1-reyes',
  aliases: ['1 reyes', 'i reyes', 'iii reyes', '3 reyes'],
  chapters: [
    53, 46, 28, 34, 18, 38, 51, 66, 28, 29,
    43, 33, 34, 31, 34, 34, 24, 46, 21, 43,
    29, 53,
  ],
},
{
  name: '2 Reyes',
  slug: '2-reyes',
  aliases: ['2 reyes', 'ii reyes', 'iv reyes', '4 reyes'],
  chapters: [
    18, 25, 27, 44, 27, 33, 20, 29, 37, 36,
    21, 21, 25, 29, 38, 20, 41, 37, 37, 21,
    26, 20, 37, 20, 30,
  ],
},

{
  name: '1 Crónicas',
  slug: '1-cronicas',
  aliases: ['1 crónicas', '1 cronicas', 'i crónicas', 'i cronicas', 'i paralipómenos', '1 paralipómenos'],
  chapters: [
    54, 55, 24, 43, 26, 81, 40, 40, 44, 14,
    46, 40, 14, 17, 29, 43, 27, 17, 19, 7,
    30, 19, 32, 31, 31, 32, 34, 21, 30,
  ],
},

{
  name: '2 Crónicas',
  slug: '2-cronicas',
  aliases: ['2 crónicas', '2 cronicas', 'ii crónicas', 'ii cronicas', 'ii paralipómenos', '2 paralipómenos'],
  chapters: [
    17, 18, 17, 22, 14, 42, 22, 18, 31, 19,
    23, 16, 22, 15, 19, 14, 19, 34, 11, 37,
    20, 12, 21, 27, 28, 23, 9, 27, 36, 27,
    21, 33, 25, 33, 27, 23,
  ],
},

{
  name: 'Esdras',
  slug: 'esdras',
  aliases: ['esdras', 'esd', 'ezr'],
  chapters: [
    11, 70, 13, 24, 17, 22, 28, 36, 15, 44,
  ],
},
{
  name: 'Nehemías',
  slug: 'nehemias',
  aliases: ['nehemías', 'nehemias', 'neh', 'ne'],
  chapters: [
    11, 20, 32, 23, 19, 19, 73, 18, 38, 40,
    36, 47, 31,
  ],
},

{
  name: 'Tobías',
  slug: 'tobias',
  aliases: ['tobías', 'tobias', 'tb', 'tob'],
  chapters: [
    25, 23, 25, 23, 28, 22, 20, 24, 12, 13,
    21, 22, 23, 17,
  ],
},

{
  name: 'Judit',
  slug: 'judit',
  aliases: ['judit', 'jdt'],
  chapters: [
    12, 18, 15, 17, 29, 21, 25, 34,
    19, 20, 21, 20, 31, 18, 15, 31,
  ],
},

{
  name: 'Ester',
  slug: 'ester',
  aliases: ['ester', 'est'],
  chapters: [
    22, 23, 15, 17, 14, 14, 10, 17,
    32, 13, 12, 6, 18, 19, 19, 24,
  ],
},

{
  name: '1 Macabeos',
  slug: '1-macabeos',
  aliases: ['1 macabeos', 'i macabeos', '1 mac', 'i mac'],
  chapters: [
    67, 70, 60, 61, 68, 63, 50, 32,
    73, 89, 74, 54, 54, 49, 41, 24,
  ],
},

  {
    name: '2 Macabeos',
    slug: '2-macabeos',
    aliases: ['2 macabeos', 'ii macabeos', '2 mac', 'ii mac'],
    chapters: [
      36, 32, 40, 50, 27, 31, 42, 36, 29, 38, 38, 45, 26, 46, 39,
    ],
  },

  {
  name: 'Job',
  slug: 'job',
  aliases: ['job', 'jb'],
  chapters: [
    22, 13, 26, 21, 27, 30, 21, 22, 35, 22,
    20, 25, 28, 22, 35, 22, 16, 21, 29, 29,
    34, 30, 17, 25, 6, 14, 23, 28, 25, 31,
    40, 22, 33, 37, 16, 33, 24, 41, 35, 28,
    25, 16,
  ],
},
{
  name: 'Proverbios',
  slug: 'proverbios',
  aliases: ['proverbios', 'prov', 'pr'],
  chapters: [
    33, 22, 35, 27, 23, 35, 27, 36, 18, 32,
    31, 28, 25, 35, 33, 33, 28, 24, 29, 30,
    31, 29, 35, 34, 28, 28, 27, 28, 27, 33,
    31,
  ],
},

{
  name: 'Salmos',
  slug: 'salmos',
  aliases: ['salmos', 'salmo', 'sal', 'ps', 'psalm'],
  chapters: [
    6, 12, 8, 8, 12, 10, 17, 9, 20, 18,
    7, 8, 6, 7, 5, 11, 15, 50, 14, 9,
    13, 31, 6, 10, 22, 12, 14, 9, 11, 12,
    24, 11, 22, 22, 28, 12, 40, 22, 13, 17,
    13, 11, 5, 26, 17, 11, 9, 14, 20, 23,
    19, 9, 6, 7, 23, 13, 11, 11, 17, 12,
    8, 12, 11, 10, 13, 20, 7, 35, 36, 5,
    24, 20, 28, 23, 10, 12, 20, 72, 13, 19,
    16, 8, 18, 12, 13, 17, 7, 18, 52, 17,
    16, 15, 5, 23, 11, 13, 12, 9, 9, 5,
    8, 28, 22, 35, 45, 48, 43, 13, 31, 7,
    10, 10, 9, 8, 18, 19, 2, 29, 176, 7,
    8, 9, 4, 8, 5, 6, 5, 6, 8, 8,
    3, 18, 3, 3, 21, 26, 9, 8, 24, 13,
    10, 7, 12, 15, 21, 10, 20, 14, 9, 6,
  ],
},

{
  name: 'Eclesiastés',
  slug: 'eclesiastes',
  aliases: ['eclesiastés', 'eclesiastes', 'qohelet', 'cohelet', 'ecl', 'qoh'],
  chapters: [
    18, 26, 22, 17, 19, 12,
    30, 17, 18, 20, 10, 14,
  ],
},

{
  name: 'Cantar de los Cantares',
  slug: 'cantar-de-los-cantares',
  aliases: [
    'cantar de los cantares',
    'cantar',
    'cant',
    'cántico',
    'cantico',
    'cánticos',
    'canticos',
    'canticum',
  ],
  chapters: [
    16, 17, 11, 16, 17, 12, 13, 14,
  ],
},












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
















] satisfies BibleBook[];


export const bookOptions = books.map((book) => book.name);

