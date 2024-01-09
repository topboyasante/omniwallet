import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CustomTextComponent from "./Text";

export default function ComponentSwitcher({ components }) {
  // Components is an array of components (Ideally Pages or Screens) that you want to be able to switch to

  // The index of the current component in display is set to that of the first element in [components] (index 0)
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  function goToComponent(index) {
    setCurrentComponentIndex(index);
  }

  const currrentComponentData = components[currentComponentIndex];

  return (
    <View>
      <View className="flex flex-row justify-between items-center bg-gray-100 p-2 rounded-md">
        {components.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => goToComponent(item.id)}
              key={index}
              className={
                currentComponentIndex === item.id
                  ? "bg-white rounded-md px-4 py-2 text-center flex-1 shadow-md"
                  : "px-4 py-2 text-center flex-1"
              }
            >
              <CustomTextComponent
                content={item.title}
                type={currentComponentIndex === item.id
                    ? "semibold"
                    : "regular"}
                additionalClasses={
                  `text-center`
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View>{currrentComponentData.content}</View>
    </View>
  );
}
