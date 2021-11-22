// TODO: write your code here

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж character уже существует!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    character.forEach((item) => this.members.add(item));
  }

  toArray() {
    const arrayMembers = [...this.members];
    return arrayMembers;
  }
}
