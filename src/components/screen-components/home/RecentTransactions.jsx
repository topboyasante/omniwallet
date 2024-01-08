import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomTextComponent from "../../ui/Text";

export default function RecentTransactions() {
  return (
    <View>
      <View className="flex flex-row justify-between items-center mb-5">
        <CustomTextComponent
          type={`semibold`}
          content={`Recent Transactions`}
          additionalClasses={`text-xl`}
        />
        <TouchableOpacity>
          <CustomTextComponent
            type={`regular`}
            content={`View All`}
            additionalClasses={`text-lg text-[#777777]`}
          />
        </TouchableOpacity>
      </View>
      <View>
        <CustomTextComponent
          type={`regular`}
          content={`No transactions made, yet 🙈`}
          additionalClasses={`text-center text-lg text-[#777777]`}
        />
      </View>
    </View>
  );
}
