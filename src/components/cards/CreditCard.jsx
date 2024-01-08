import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import CardBG from "../../../assets/images/credit-cards/cardbg.png";
import CardConnection from "../../../assets/images/credit-cards/cardConnection.png";
import CardChip from "../../../assets/images/credit-cards/cardChip.png";
import CustomTextComponent from "../ui/Text";

export default function CreditCard({
  index,
  name,
  cardNumber,
  cardType,
  expiryDate,
  balance,
}) {
  return (
    <View className="flex-1 bg-[#121212] w-[370px] h-[230px] rounded-xl">
      <ImageBackground
        source={CardBG}
        className="w-full h-full"
        resizeMode="cover"
      >
        <View className="p-5 justify-center h-full">
          <View className="flex flex-row justify-between items-center">
            <Image
              source={CardChip}
              className="w-[30px] h-[30px]"
              resizeMode="contain"
            />
            <Image
              source={CardConnection}
              className="w-[30px] h-[30px]"
              resizeMode="contain"
            />
          </View>
          <View className="my-5">
            <CustomTextComponent
              type={"semibold"}
              additionalClasses={`text-white text-2xl`}
              content={cardNumber}
            />
            <CustomTextComponent
              type={"regular"}
              additionalClasses={`text-white text-lg mt-2`}
              content={name}
            />
          </View>
          <View className="flex flex-row justify-between items-center">
            <CustomTextComponent
              type={"semibold"}
              additionalClasses={`text-white text-md`}
              content={cardType.toUpperCase()}
            />
            <CustomTextComponent
              type={"regular"}
              additionalClasses={`text-white text-md`}
              content={expiryDate}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
