const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring
// const books = getBooks();
// const book = getBook(3);

// // const title = book.title;
// // const author = book.author;
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(title, author, genres);

// //Rest/Spread Operations
// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre);
// console.log(otherGenres);

// const newGenres = [...genres, "epicFantasy"];
// console.log(newGenres);

// const updatedBook = { ...book, movieReleaseDate: "2001-12-19", pages: 1210 };
// console.log(updatedBook);

// // Arrow Functions
// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str) => {
//   return str.split("-")[0];
// };

// console.log(getYear(publicationDate));

// // Template Literals
// const summary = `${title}, a ${pages}-page long book, was written by ${author}
//   and published in ${getYear(publicationDate)}.
//   The book has${hasMovieAdaptation ? "" : " not"} been adapted into a movie.`;

// console.log(summary);

// //Ternary Operator
// const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
// console.log(`The book has ${pagesRange} pages.`);

// // Short circuiting
// console.log(true && "This value is true");
// console.log(false && "This value is false");
// console.log(hasMovieAdaptation && "This book has a movie adaptation");

// // False values: 0, '', null, undefined
// console.log(0 && "Test");
// console.log(undefined && "Test");

// console.log(true || "This value is true");
// console.log(false || "This value is false");

// book.translations.polish = book.translations.polish || "NOT TRANSLATED";

// console.log(book.translations.polish);

// const countWrong = book.reviews.librarything?.reviewsCount || "No Data";
// console.log(countWrong);

// const count = book.reviews.librarything?.reviewsCount ?? "No Data";
// console.log(count);

// // Optional Chaining
// function getTotalReviewCounts(book) {
//   const goodReadsReviewCount = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarythingReviewCount = book.reviews?.librarything?.reviewsCount ?? 0;

//   return goodReadsReviewCount + librarythingReviewCount;
// }

// console.log(getTotalReviewCounts(book));

// // Array Map Method
// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((x) => x * 2);
// console.log(x);

// function getTotalReviewCounts(book) {
//   const goodReadsReviewCount = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarythingReviewCount = book.reviews?.librarything?.reviewsCount ?? 0;

//   return goodReadsReviewCount + librarythingReviewCount;
// }

// const titles = books.map((x) => x.title);
// console.log(titles);

// const essentialData = books.map((x) => ({
//   title: x.title,
//   author: x.author,
//   reviewCount: getTotalReviewCounts(x),
// }));
// console.log(essentialData);

// // Array Filter Method
// const longBooks = books
//   .filter((x) => x.pages > 500 && x.hasMovieAdaptation)
//   .map((x) => x.title);
// console.log(longBooks);

// const adventureBooks = books
//   .filter((x) => x.genres.includes("adventure"))
//   .map((x) => x.title);
// console.log(adventureBooks);

// // Array Reduce Method
// const allPageCount = books.reduce(
//   (pageCount, book) => pageCount + book.pages,
//   0,
// );
// console.log(allPageCount);

// // Array Sort Method
// const array = [4, 2, 1, 5, 8, 3, 4];
// const sortedArray = array.slice().sort((a, b) => b - a);
// console.log(sortedArray);
// console.log(array);

// const sortedByPageCount = books
//   .slice()
//   .sort((a, b) => a.pages - b.pages)
//   .map((x) => ({
//     title: x.title,
//     pages: x.pages,
//   }));
// console.log(sortedByPageCount);

// // ******************************
// // Immutable Arrays
// // ******************************

// // Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);

// // Delete a book object from array
// const booksAfterDelete = booksAfterAdd.filter((x) => x.id != 3);
// // .map((x) => x.id);
// console.log(booksAfterDelete);

// // Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((x) =>
//   x.id == 1 ? { ...x, pages: 1 } : x,
// );
// console.log(booksAfterUpdate);

// Promise
// fetch("https://jsonplaceholder.typicode.com/posts");
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Async/await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log(data);

  console.log("Test");

  return data;
}

const todos = getTodos();
console.log(todos);
