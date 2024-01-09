import { FlatList, TouchableOpacity, View } from "react-native";
import CreditCard from "../../../components/cards/CreditCard";
import { useNavigation } from "@react-navigation/native";
import { useOmniStore } from "../../../zustand";
import CustomTextComponent from "../../../components/ui/Text";

export default function CardsSection() {
  const navigation = useNavigation();
  const wallets = useOmniStore((state) => state.wallets);

  return (
    <View>
      <View className="flex flex-row justify-between items-center mb-5">
        <CustomTextComponent
          type={`semibold`}
          content={`Your Cards`}
          additionalClasses={`text-xl`}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Cards")}>
          <CustomTextComponent
            type={`regular`}
            content={`View All`}
            additionalClasses={`text-lg text-[#777777]`}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={wallets}
        renderItem={({ item }) => (
          <CreditCard
            name={item.name}
            balance={item.balance}
            cardType={item.cardType}
            cardNumber={item.cardNumber}
            expiryDate={item.expiryDate}
            index={item.index}
            fullWidth={false}
          />
        )}
        keyExtractor={(item) => item.cardNumber}
        contentContainerStyle={{ columnGap: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
