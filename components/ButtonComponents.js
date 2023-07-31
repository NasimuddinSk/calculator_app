import { TouchableOpacity, Text } from "react-native";

const ButtonComponents = ({ text, bgColor, tColor, calculateHandler }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: bgColor ? bgColor : "#0009",
        borderRadius: 10,
        margin: 10,
        padding: 7,
      }}
      onPress={() => calculateHandler(text)}
    >
      <Text
        style={{
          color: tColor ? tColor : "#FFF",
          padding: 5,
          margin: 8,
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponents;
