import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useOmniStore } from "../../../zustand";
import CustomTextComponent from "../../ui/Text";

export default function ActiveInvestments() {
  const savings = useOmniStore((state) => state.investments);
  const activeSavings = savings.filter((i) => i.isActive === true);
  return (
    <ScrollView className="py-5">
      {activeSavings.map((item, index) => {
        return (
          <TouchableOpacity
            className="bg-black w-full h-[250px] rounded-lg p-5 flex justify-between"
            key={index}
          >
            <CustomTextComponent
              type={"semibold"}
              content={item.title}
              additionalClasses={`text-white text-xl`}
            />
            <View>
              <CustomTextComponent
                type={"semibold"}
                content={`Current Amount : ${new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "GHC",
                }).format(Number(item.currentAmount))}`}
                additionalClasses={`text-white text-lg`}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
