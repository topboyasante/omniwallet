import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import CreditCard from "../../../components/cards/CreditCard";
import SafeAreaContainer from "../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../components/ui/Text";
import { useOmniStore } from "../../../zustand";

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
            className="bg-black rounded-full px-5 py-1 flex flex-row items-center"
          >
            <CustomTextComponent
              type={`semibold`}
              content={`Add`}
              additionalClasses={`text-lg text-white`}
            />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center">
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
                    fullWidth={true}
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
                        className="bg-gray-100 rounded-md px-2 py-1"
                      >
                        <CustomTextComponent
                          type={`regular`}
                          content={`Cancel`}
                          additionalClasses={`text-lg text-red-500 `}
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
                        fullWidth={true}
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
                        className="bg-gray-100 rounded-md px-2 py-1"
                      >
                        <CustomTextComponent
                          type={`regular`}
                          content={`Delete Card`}
                          additionalClasses={`text-lg text-red-500 `}
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
