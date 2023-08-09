import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import store from "../../store/counter";

interface propsType {}
const C1 = observer(({}) => {
  console.log("storeC1", store);
  return (
    <View>
      <Button onClick={() => store.obj.counterC1++}>+</Button>
      <Button onClick={() => store.obj.counterC1--}>-</Button>
      <Text>{store.obj.counterC1}</Text>
    </View>
  );
});
export default C1;
