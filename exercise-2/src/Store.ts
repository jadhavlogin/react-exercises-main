import { observable } from 'mobx';

export class AppStore {
  @observable counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

export default new AppStore();