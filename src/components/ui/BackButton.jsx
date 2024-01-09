import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeftIcon as ArrowLeftIconSolid } from "react-native-heroicons/solid";


export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="mb-8 bg-black rounded-full w-[40px] h-[40px] flex justify-center items-center"
    >
      <ArrowLeftIconSolid size={20} color={"white"} />
    </TouchableOpacity>
  );
}
