import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import "./index.css";
import C1 from "../../components/C1";
import C2 from "../../components/C2";
import store from "../../store/counter";

const TableList = observer(({}) => {
  console.log("store", store);
  return (
    <View>
      <Button onClick={store.increment}>+</Button>
      <Button onClick={store.decrement}>-</Button>
      <Button onClick={store.incrementAsync}>Add Async</Button>
      <Text>{store.obj.counter}</Text>
      <C1></C1>
      <C2></C2>
      <Button
        onClick={() => {
          store.obj = { ...store.obj };
        }}
      >
        克隆
      </Button>
    </View>
  );
});
export default TableList;
