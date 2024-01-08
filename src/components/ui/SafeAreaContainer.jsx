import React from "react";
import { SafeAreaView, View } from "react-native";

export default function SafeAreaContainer({children}) {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="p-5">
        {children}
      </View>
    </SafeAreaView>
  );
}
