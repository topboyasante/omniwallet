import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import OnboardingImg1 from "../../../assets/images/onboarding/onboarding1.png";
import OnboardingImg2 from "../../../assets/images/onboarding/onboarding2.png";
import OnboardingImg3 from "../../../assets/images/onboarding/onboarding3.png";
import CustomTextComponent from "../../components/ui/Text";

const onboardingSteps = [
  {
    img: OnboardingImg1,
    title: "You ought to know where your money goes",
    description:
      "Get an overview of how you are performing and motivate yourself to achieve even more.",
  },
  {
    img: OnboardingImg2,
    title: "Gain total control of your money",
    description:
      "Track your transaction easily, with categories and financial report",
  },
  {
    img: OnboardingImg3,
    title: "Plan ahead and manage your money better",
    description:
      "Setup your budget for each category so you in control. Track categories you spend the most money on",
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const navigation = useNavigation();

  const data = onboardingSteps[screenIndex];
  const isLastScreen = screenIndex === onboardingSteps.length - 1;
  const isFirstScreen = screenIndex === 0;

  const onContinue = () => {
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="bg-[#183a37] flex-1">
        <GestureDetector gesture={swipes}>
          <View className="flex-1">
            {/* Skip */}
            <View className="flex flex-row justify-end p-5">
              <TouchableOpacity onPress={() => navigation.navigate("register")}>
                <CustomTextComponent
                  type={"semibold"}
                  content={`Skip`}
                  additionalClasses={`text-center text-white text-xl font-bold`}
                />
              </TouchableOpacity>
            </View>
            {/* Images */}
            <View className="flex justify-center items-center h-[40%]">
              <Image source={data.img} className="w-full h-full" />
            </View>
            {/* Content */}
            <View className="flex justify-center items-center h-[50%] p-5">
              <View className="w-full h-full bg-white rounded-2xl p-5 flex justify-center">
                <View>
                  <CustomTextComponent
                    type={"bold"}
                    content={data.title}
                    additionalClasses={`text-center text-[#13085E] font-bold text-3xl`}
                  />
                  <CustomTextComponent
                    type={"regular"}
                    content={data.description}
                    additionalClasses={`text-center text-[#13085E]/80 text-xl mt-3`}
                  />
                </View>
                {/* Onboarding Steps Indicator */}
                <View className="flex flex-row items-center justify-center space-x-2 my-5">
                  {onboardingSteps.map((_step, index) => (
                    <View
                      key={index}
                      className={
                        index === screenIndex
                          ? "w-[10px] h-[20px] bg-[#183a37] rounded-xl"
                          : "w-[10px] h-[10px] bg-gray-300 rounded-xl"
                      }
                    />
                  ))}
                </View>
                {/* Next Button */}
                <View>
                  <TouchableOpacity
                    className="bg-[#183a37] px-4 py-3 rounded-full shadow-xl"
                    onPress={
                      isLastScreen
                        ? () => navigation.navigate("register")
                        : () => onContinue()
                    }
                  >
                    <CustomTextComponent
                      type={"semibold"}
                      content={isLastScreen ? "Get Started" : "Next"}
                      additionalClasses={`text-center text-white text-xl font-bold`}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </GestureDetector>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
