import { View } from "react-native";
import ButtonComponents from "./components/ButtonComponents";
import { useState } from "react";
import { Text } from "react-native";

const App = () => {
  const [calValue, setCalValue] = useState("");

  const calculateHandler = (value) => {
    if (value == "AC") {
      setCalValue("");
    } else if (value == "<") {
      setCalValue(calValue.substring(0, calValue.length - 1));
    } else if (value == "=") {
      if (calValue.length != 0) {
        if (
          calValue.startsWith("+") ||
          calValue.startsWith("-") ||
          calValue.startsWith("*") ||
          calValue.startsWith("/")
        ) {
          return;
        }
        const ans = Number(eval(calValue).toFixed(3)).toString();
        setCalValue(ans);
      }
    } else setCalValue((pre) => pre + value);
  };

  return (
    <View className="flex-1  mt-16">
      {/* Output */}
      <View className="flex-1 justify-end items-end mx-5 my-5">
        <Text className="text-4xl text-black font-bold">{calValue}</Text>
      </View>
      {/* Input */}
      <View className="flex-2 flex-row items-center justify-center flex-wrap">
        <View className="flex-row">
          <ButtonComponents text={"AC"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"<"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"/"} calculateHandler={calculateHandler} />
        </View>

        <View className="flex-row">
          <ButtonComponents text={"7"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"8"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"9"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"*"} calculateHandler={calculateHandler} />
        </View>

        <View className="flex-row">
          <ButtonComponents text={"4"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"5"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"6"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"-"} calculateHandler={calculateHandler} />
        </View>
        <View className="flex-row">
          <ButtonComponents text={"1"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"2"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"3"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"+"} calculateHandler={calculateHandler} />
        </View>
        <View className="flex-row">
          <ButtonComponents text={"%"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"0"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"."} calculateHandler={calculateHandler} />
          <ButtonComponents text={"="} calculateHandler={calculateHandler} />
        </View>
      </View>
    </View>
  );
};

export default App;
