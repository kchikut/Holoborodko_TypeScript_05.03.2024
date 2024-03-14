/*
Створіть дженерик (загальну) функцію purge(), яка приймає один параметр – дженерик масив inventory та повертає дженерик масив того ж типу, що містить елементи початкового масиву без двох перших елементів.
Об’явіть змінну inventory, що містить наступний масив книг
[
{ id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
{ id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
{ id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
{ id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
Викличте функцію purge() та передайте їй ці дані. Виведіть результат у консоль.
Викличте функцію purge() з числовим масивом і знову виведіть результат у консоль.
Об’явіть змінну purgeNumbers та присвойте їй функцію purge зі значенням параметру типу number.
Викличте функцію purgeNumbers() та передайте їй числовий масив та масив рядків.
Створіть інтерфейс Magazine, який містить дві рядкові властивості, title, publisher.
Створіть дженерик клас Shelf:

·    додайте приватну властивість items, яка є масивом елементів типу Т.

·    додайте метод add(), який приймає один параметр item типу T і додає його в масив. Нічого не повертає.

·    додайте метод getFirst(), який нічого не приймає, і повертає перший елемент із items.

Створіть екземпляр класу Shelf - bookShelf і збережіть усі книжки з inventory в bookShelf. Отримайте першу книжку і виведіть її назву в консоль.
Об'явіть змінну magazines, яка містить наступні дані:
[
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
	{ title: 'Literary Fiction Quarterly', publisher: 'College Press' },
	{ title: 'Five Points', publisher: 'GSU' }
];
Створіть екземпляр класу Shelf - magazineShelf і збережіть усі журнали в magazineShelf. Отримайте перший журнал і виведіть його в консоль.
Cтворіть дженерик інтерфейс для функції зворотнього виклику CallbackFn<T>, яка приймає два параметри:

·    err: Error | null,

·    data: T | null

і нічого не повертає.
Використайте цей інтерфейс для функції, яка приймає своїм аргументом функцію зворотнього виклику.
*/
// Тип перерахування Category
// Тип перерахування Category
enum Category {
    Software,
    Fiction,
    Science,
    History
}
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}
function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
const purgedInventory = purge(inventory);
console.log(purgedInventory);
const numbers = [1, 2, 3, 4, 5];
const purgedNumbers = purge(numbers);
console.log(purgedNumbers);
const purgeNumbers: <T>(inventory: T[]) => T[] = purge;
const purgedMixed = purgeNumbers([...numbers, ...inventory]);
console.log(purgedMixed);
interface Magazine {
    title: string;
    publisher: string;
}
class Shelf<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0];
    }
}
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
const firstBook = bookShelf.getFirst();
console.log(firstBook.title);
const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
const firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine.title);
interface CallbackFn<T> {
    (err: Error | null, data: T | null): void;
}
function processData(callback: CallbackFn<string>): void {
    try {
        const result = 'Data processed successfully';
        callback(null, result);
    } catch (error) {
        if (error instanceof Error) {
            callback(error, null);
        }
    }
}
processData((err, data) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Data:', data);
    }
});
