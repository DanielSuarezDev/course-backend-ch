// Import stylesheets
import './style.css';

class InfoUsers {
  constructor(name, spell, books, pets) {
    this.name = name;
    this.spell = spell;
    this.books = books;
    this.pets = pets;
  }

  getFullName() {
    console.log(`Hola soy ${this.name} ${this.spell}`);
  }

  addPets(name) {
    this.pets.push(name);
  }

  countPets() {
    console.log(`Cantidad de mascotas: ${this.pets.length} - ${this.pets}`);
  }

  addBook(name, author) {
    const bookNew = { name, author };

    this.books.push(bookNew);
  }

  getBookName() {
    let nameBook = [];
    this.books.map((item) => {
      return nameBook.push(item.name);
    });

    console.log(nameBook.toString());
  }
}

const user1 = new InfoUsers(
  'Daniel',
  'Suarez',
  [
    {
      name: 'Js',
      author: 'Brais',
    },
    {
      name: 'Habit',
      author: 'Brenda',
    },
  ],
  ['Candy', 'Noah', 'Milo']
);

user1.addBook('perro', 'mi perro');
user1.addPets('lupita');
user1.getFullName();
user1.getBookName();
user1.addPets();
user1.countPets();
