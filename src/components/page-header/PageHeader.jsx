import React from "react";
import { TouchableOpacity, View, SafeAreaView } from "react-native";
import {
  BellIcon as BellIconMini,
  ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconMini,
} from "react-native-heroicons/mini";
import CustomTextComponent from "../ui/Text";

export default function PageHeader() {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex flex-row justify-between items-center px-3 py-5">
        {/* Left Side */}
        <View>
          <CustomTextComponent
            type={"semibold"}
            content={"Hello, Nana Kwasi"}
            additionalClasses={`text-2xl`}
          />
        </View>
        {/* Right Side */}
        <View className="flex flex-row space-x-5">
          <TouchableOpacity>
            <BellIconMini size={25} color={`black`} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ChatBubbleOvalLeftEllipsisIconMini size={25} color={`black`} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
