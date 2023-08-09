import { View, Button, Text } from "@tarojs/components";
import store from "../../store/counter";
import { observer } from "mobx-react-lite";

const C2 = () => {
  console.log("storeC2", store);
  return (
    <View>
      <Button onClick={() => store.obj.counterC2++}>+</Button>
      <Button onClick={() => store.obj.counterC2++}>-</Button>
      <Text>{store.obj.counterC2}</Text>
    </View>
  );
};
export default observer(C2);
