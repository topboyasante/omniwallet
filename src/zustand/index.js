import { create } from "zustand";

export const useOmniStore = create((set) => ({
  hasSeenOnboarding: true,
  isAuthorized: true,
  wallets: [
    {
      name: "Nana Kwasi Asante",
      cardNumber: "4562   1122   4595  1234",
      balance: 2050.45,
      expiryDate: "06/25",
      cardType: "Visa",
      index: 0,
    },
    {
      name: "Nana Kwasi Asante",
      cardNumber: "4562   1122   4595  5678",
      balance: 1567.9,
      expiryDate: "08/24",
      cardType: "Mastercard",
      index: 1,
    },
    {
      name: "Nana Kwasi Asante",
      cardNumber: "4562   1122   4595  9012",
      balance: 700.0,
      expiryDate: "11/23",
      cardType: "American Express",
      index: 2,
    },
    {
      name: "Nana Kwasi Asante",
      cardNumber: "4562   1122   4595  3456",
      balance: 430.5,
      expiryDate: "02/26",
      cardType: "Discover",
      index: 3,
    },
    {
      name: "Nana Kwasi Asante",
      cardNumber: "4562   1122   4595  7890",
      balance: 899.75,
      expiryDate: "09/27",
      cardType: "Visa",
      index: 4,
    },
  ],
  savings: [
    {
      id:0,
      title:"Macbook Pro M3",
      target:15000,
      saved:10000,
      isActive:true
    },
    {
      id:1,
      title:"School Fees",
      target:6000,
      saved:6000,
      isActive:false
    },
  ],
  investments:[
    {
      id:0,
      title:"XAUUSD",
      currentAmount:10000,
      isActive:true
    },
    {
      id:1,
      title:"T-Bills",
      currentAmount:15000,
      isActive:false
    },
  ],
  authorize: () => set({ isAuthorized: true }),
}));
