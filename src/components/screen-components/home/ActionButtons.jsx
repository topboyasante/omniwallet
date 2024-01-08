import { TouchableOpacity, View } from "react-native";
import {
  ArrowDownIcon as ArrowDownIconSolid,
  ArrowUpIcon as ArrowUpIconSolid,
  CurrencyPoundIcon as CurrencyPoundIconSolid,
  ChartBarIcon as ChartBarIconSolid,
} from "react-native-heroicons/solid";
import CustomTextComponent from "../../ui/Text";
import { useNavigation } from "@react-navigation/native";

const ActionButtonsList = [
  {
    name: "Send",
    navigateTo: "Home",
    icon: <ArrowUpIconSolid size={20} color={"white"} />,
  },
  {
    name: "Recieve",
    navigateTo: "Home",
    icon: <ArrowDownIconSolid size={20} color={"white"} />,
  },
  {
    name: "Goals",
    navigateTo: "Save",
    icon: <CurrencyPoundIconSolid size={20} color={"white"} />,
  },
  {
    name: "Stocks",
    navigateTo: "Invest",
    icon: <ChartBarIconSolid size={20} color={"white"} />,
  },
];

export default function ActionButtons() {
  const navigation = useNavigation();
  return (
    <View className="my-8 flex flex-row justify-between items-center">
      {ActionButtonsList.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(`${item.navigateTo}`)}
          >
            <View className="flex items-center gap-2">
              <View className="bg-black rounded-full p-5">{item.icon}</View>
              <View>
                <CustomTextComponent content={item.name} type={"regular"} />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
