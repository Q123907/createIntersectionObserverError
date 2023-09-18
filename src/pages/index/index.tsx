import { View, Button, Text } from "@tarojs/components";
import { observer } from "mobx-react-lite";
import "./index.css";
import C1 from "../../components/C1";
import C2 from "../../components/C2";
import store from "../../store/counter";
import { useEffect } from "react";
import Taro, { PageInstance } from "@tarojs/taro";

const Index = () => {
  console.log("store", store);
  useEffect(() => {
    let _observer: any;
    //组件显示事件
    const showCommonEvent = () => {
      _observer = Taro.createIntersectionObserver(
        Taro.getCurrentInstance().page as PageInstance,
        {
          thresholds: [0, 1],
          observeAll: true,
        }
      );
      const options = {};
      setTimeout(() => {
        _observer.relativeToViewport(options).observe(`#a1`, (res) => {
          console.log("resresres", res.intersectionRatio);
          if (res.intersectionRatio === 0) {
            return;
          }
          if (res.intersectionRatio === 1) {
            return;
          }
        });
      }, 1000);
    };
    setTimeout(() => {
      showCommonEvent();
    });
    //页面数据监听
    return () => {
      if (_observer) {
        _observer.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <View
        style={{
          height: "500px",
          width: "500px",
          background: "red",
        }}
      ></View>
      <View
        id="a1"
        style={{
          height: "300px",
          width: "300px",
          background: "green",
        }}
      ></View>
      <View
        style={{
          height: "300px",
          width: "300px",
          background: "blue",
        }}
      ></View>
      <View
        style={{
          height: "300px",
          width: "300px",
          background: "black",
        }}
      ></View>
    </>
  );
};
export default observer(Index);
