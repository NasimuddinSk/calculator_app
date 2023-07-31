import { View } from "react-native";
import ButtonComponents from "./components/ButtonComponents";
import { useState } from "react";
import { Text } from "react-native";

const App = () => {
  const [calValue, setCalValue] = useState("");

  const calculateHandler = (value) => {
    if (value == "AC") {
      setCalValue("");
    } else if (value == "DL") {
      setCalValue(calValue.substring(0, calValue.length - 1));
    } else if (value == "=") {
      if (calValue.length != 0) {
        if (
          calValue.startsWith("+") ||
          calValue.startsWith("-") ||
          calValue.startsWith("*") ||
          calValue.startsWith("/") ||
          calValue.endsWith("+") ||
          calValue.endsWith("-") ||
          calValue.endsWith("*") ||
          calValue.endsWith("/")
        ) {
          return;
        }
        const ans = Number(eval(calValue).toFixed(3)).toString();
        setCalValue(ans);
      }
    } else setCalValue((pre) => pre + value);
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 60,
        padding: 5,
      }}
    >
      {/* Output */}
      <Text
        style={{
          color: "#fc6603",
          fontWeight: "900",
          fontSize: 10,
        }}
      >
        ♥ Made in India
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginHorizontal: 5,
          marginVertical: 30,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "700",
            color: "#0009",
          }}
        >
          {calValue}
        </Text>
      </View>
      {/* Input */}
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ButtonComponents
            text={"AC"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
          <ButtonComponents
            text={"DL"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
          <ButtonComponents
            text={"/"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ButtonComponents text={"7"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"8"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"9"} calculateHandler={calculateHandler} />
          <ButtonComponents
            text={"*"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ButtonComponents text={"4"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"5"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"6"} calculateHandler={calculateHandler} />
          <ButtonComponents
            text={"-"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ButtonComponents text={"1"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"2"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"3"} calculateHandler={calculateHandler} />
          <ButtonComponents
            text={"+"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ButtonComponents
            text={"%"}
            tColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
          <ButtonComponents text={"0"} calculateHandler={calculateHandler} />
          <ButtonComponents text={"."} calculateHandler={calculateHandler} />
          <ButtonComponents
            text={"="}
            tColor={"#FFF"}
            bgColor={"#fc6603"}
            calculateHandler={calculateHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
