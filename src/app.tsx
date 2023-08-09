import { Component, PropsWithChildren } from "react";
import { Provider } from "mobx-react";

import counterStore from "./store/counter";

import "./app.css";

const store = {
  counterStore,
};

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider>{this.props.children}</Provider>;
  }
}

export default App;
