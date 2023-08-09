import { action, observable } from "mobx";

const counterStore = observable({
  obj: {
    counter: 0,
    counterC1: 0,
    counterC2: 0,
  },
  counterStore: action(function () {
    this.counter++;
  }),
  increment: action(function () {
    console.log(222222, this);
    counterStore.obj.counter++;
  }),
  decrement() {
    counterStore.obj.counter--;
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  },
});

export default counterStore;
