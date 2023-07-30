import { TouchableOpacity, Text } from "react-native";

const ButtonComponents = ({ text, calculateHandler }) => {
  return (
    <TouchableOpacity
      className="bg-slate-600 rounded-md m-2 p-2 flex-1"
      onPress={() => calculateHandler(text)}
    >
      <Text className="text-white p-2 m-2 text-2xl font-extrabold text-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponents;
