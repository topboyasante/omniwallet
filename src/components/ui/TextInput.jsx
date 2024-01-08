import { TextInput } from "react-native";

export default function CustomTextInput({ placeholder, additionalClasses }) {
  return (
    <TextInput
      placeholder={placeholder}
      className={`border-2 border-[#a2a1a1]/30 mt-2 px-2 py-3 font-['manrope-reg'] rounded-md ${additionalClasses}`}
    />
  );
}
