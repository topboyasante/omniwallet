import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View
} from "react-native";
import CustomTextComponent from "../../../components/ui/Text";
import CustomTextInput from "../../../components/ui/TextInput";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#F5F7FF] flex-1">
      <View className="p-5">
        <View className="pt-10">
          <CustomTextComponent
            type={"bold"}
            content={`Welcome to OmniWallet`}
            additionalClasses={`text-[#183a37] text-3xl`}
          />
          <CustomTextComponent
            type={"regular"}
            content={`Sign in to your account`}
            additionalClasses={`text-[#777777] text-xl`}
          />
        </View>
        {/* Form */}
        <View className="my-5">
          <View className="mb-5">
            <CustomTextComponent
              type={"semibold"}
              content={`Email`}
              additionalClasses={`text-xl`}
            />
            <CustomTextInput placeholder="jbezos@gmail.com" />
          </View>
          <View className="mb-5">
            <CustomTextComponent
              type={"semibold"}
              content={`Password`}
              additionalClasses={`text-xl`}
            />
            <CustomTextInput placeholder="******" />
          </View>
          <TouchableOpacity className="bg-[#183a37] px-4 py-3 rounded-2xl mt-5">
            <CustomTextComponent
              type={"bold"}
              content={`Sign In`}
              additionalClasses={`text-center text-white text-xl`}
            />
          </TouchableOpacity>
        </View>
        {/* Link to Sign In */}
        <View className="flex flex-row items-center gap-[1.5px]">
          <CustomTextComponent
            type={"regular"}
            content={`Don't have an account?`}
            additionalClasses={`text-lg`}
          />
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <CustomTextComponent
              type={"bold"}
              content={`Sign Up`}
              additionalClasses={`text-[#183a37] text-lg`}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
