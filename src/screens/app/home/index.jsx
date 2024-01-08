import React from "react";
import CardsSection from "../../../components/screen-components/home/CardsSection";
import SafeAreaContainer from "../../../components/ui/SafeAreaContainer";
import ActionButtons from "../../../components/screen-components/home/ActionButtons";
import RecentTransactions from "../../../components/screen-components/home/RecentTransactions";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaContainer>
      <ScrollView>
        <CardsSection />
        <ActionButtons />
        <RecentTransactions />
      </ScrollView>
    </SafeAreaContainer>
  );
}
