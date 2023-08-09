import { View, Button, Text } from "@tarojs/components";

import store from "../../store/counter";
import { observer } from "mobx-react-lite";

const C1 = ({}) => {
  console.log("storeC1", store);
  return (
    <View>
      <Button onClick={() => store.obj.counterC1++}>+</Button>
      <Button onClick={() => store.obj.counterC1--}>-</Button>
      <Text>{store.obj.counterC1}</Text>
    </View>
  );
};
export default observer(C1);
