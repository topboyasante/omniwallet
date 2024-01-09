import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SafeAreaContainer from "../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../components/ui/Text";
import { useOmniStore } from "../../../zustand";
import CreditCard from "../../../components/cards/CreditCard";
import { useNavigation } from "@react-navigation/native";
import { PlusIcon as PlusIconSolid } from "react-native-heroicons/solid";

export default function CardScreen() {
  const navigation = useNavigation();
  const wallets = useOmniStore((state) => state.wallets);

  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const selectedCard = wallets.find((i) => i.index === selectedCardIndex);

  return (
    <SafeAreaContainer>
      <ScrollView>
        <View className="flex flex-row justify-between items-center mb-5">
          <CustomTextComponent
            type={`semibold`}
            content={`Your Cards`}
            additionalClasses={`text-xl`}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("add-card")}
            className="bg-black rounded-md px-2 py-1 flex flex-row items-center"
          >
            <PlusIconSolid color={"white"} size={15} />

            <CustomTextComponent
              type={`regular`}
              content={`Add Card`}
              additionalClasses={`text-lg text-white ml-2`}
            />
          </TouchableOpacity>
        </View>
        <View>
          {wallets.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  className="my-5"
                  onPress={() => {
                    setCardModalOpen(true);
                    setSelectedCardIndex(index);
                  }}
                >
                  <CreditCard
                    name={item.name}
                    balance={item.balance}
                    cardType={item.cardType}
                    cardNumber={item.cardNumber}
                    expiryDate={item.expiryDate}
                    index={item.index}
                  />
                </TouchableOpacity>
                <Modal
                  visible={cardModalOpen}
                  animationType="slide"
                  presentationStyle="pageSheet"
                >
                  <View className="px-3 py-8">
                    <View className="flex flex-row justify-between items-center mb-5">
                      <CustomTextComponent
                        type={`semibold`}
                        content={`Your Card`}
                        additionalClasses={`text-xl`}
                      />
                      <TouchableOpacity
                        onPress={() => setCardModalOpen(false)}
                        className="bg-red-700 rounded-md px-2 py-1"
                      >
                        <CustomTextComponent
                          type={`regular`}
                          content={`Cancel`}
                          additionalClasses={`text-lg text-white `}
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="h-[230px]">
                      <CreditCard
                        name={selectedCard.name}
                        balance={selectedCard.balance}
                        cardType={selectedCard.cardType}
                        cardNumber={selectedCard.cardNumber}
                        expiryDate={selectedCard.expiryDate}
                        index={selectedCard.index}
                      />
                    </View>
                    <View className="flex flex-row items-center space-x-3 my-5">
                      <TouchableOpacity
                        onPress={() => setCardModalOpen(false)}
                        className="bg-blue-700 rounded-md px-2 py-1"
                      >
                        <CustomTextComponent
                          type={`regular`}
                          content={`Edit Card`}
                          additionalClasses={`text-lg text-white `}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setCardModalOpen(false)}
                        className="bg-red-700 rounded-md px-2 py-1"
                      >
                        <CustomTextComponent
                          type={`regular`}
                          content={`Delete Card`}
                          additionalClasses={`text-lg text-white `}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
}
