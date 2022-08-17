class Course {
  #price;
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get price() {
    return `\$${this.#price}`;
  }
  set price(value) {
    if (value > 0) {
      this.#price = value;
    }
  }

  calc() {
    return this.length / this.#price;
  }
  log() {
    console.log(
      `Title: ${this.title},
			Length: ${this.length},
			Price: ${this.price},
			Length/Price: ${this.calc()}
			`
    );
  }
}

const Js = new Course('js', 10, 100);
const Php = new Course('php', 15, 100);
// Js.log();
// Php.log();

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}
const vue = new PracticalCourse('vue', 14, 55, 234);
vue.price = 25;
// vue.#price = 20;
vue.log();

// class TheoreticalCourse extends Course {
//   publish() {
//     console.log('Theoretical Course');
//   }
// }
// const angular = new TheoreticalCourse();
// angular.publish();
