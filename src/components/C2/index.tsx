import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import store from "../../store/counter";

interface propsType {}
const C2 = observer(() => {
  console.log("storeC2", store);
  return (
    <View>
      <Button onClick={() => store.obj.counterC2++}>+</Button>
      <Button onClick={() => store.obj.counterC2++}>-</Button>
      <Text>{store.obj.counterC2}</Text>
    </View>
  );
});
export default C2;
