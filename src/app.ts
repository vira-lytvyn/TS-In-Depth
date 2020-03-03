showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// Task 02.01.4
enum Category {
  JavaScript, CSS, HTML, TypeScript, Angular,
}

// Task 02.01.1
type Book = {
  title: string;
  author: string;
  available: boolean;
  // Task 02.01.5
  category: Category;
};

// Task 02.01.1.a
function getAllBooks(): Book[] {
  const books: Book[] = [
    { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
  ];
  return books;
}

// Task 02.01.2
function logFirstAvailable(books: Book[]): void {
  // Task 02.01.2.a
  console.log(`Books quantity ${books.length}`);
  // Task 02.01.2.b
  const firstAvailableBook = books.find((book: Book) => book.available);
  console.log(`First available book is ${firstAvailableBook.title}`);
}

// Task 02.01.3
const books = getAllBooks();
logFirstAvailable(books);

// Task 02.01.6
function getBookTitlesByCategory(bookCategory: Category): Array<string> {
  // NOTE: using array operators here despite known better solution in terms of performance,
  // since 1) the length of array is rather small, 2) it is learning tasks, 3) to demo more elegant way
  return books
    .filter((book: Book) => book.category === bookCategory)
    .map((book: Book) => book.title);
}
// Task 02.01.7
function logBookTitles(bookTitles: string[]): void {
  console.log(...bookTitles);
}
const JSBooks = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(JSBooks);

// Task 02.01.8
function getBookAuthorByIndex(index: number): [string, string] {
  const book = books[index];
  return [book.title, book.author];
}
console.log(getBookAuthorByIndex(2));

// Task 02.01.9
function calcTotalPages(): bigint {
  const data = [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
  { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
  { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

  return data.reduce((acc: bigint, lib) => acc + BigInt(lib.books) * BigInt(lib.avgPagesPerBook), 0n);
}
console.log(`Total Pages in all libraries ${calcTotalPages()}`);
