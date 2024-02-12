import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "فروش امروز",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "بیشتر از هفته پیش",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "کاربران امروز",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "بیشتر از هفته پیش",

    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "کاربران جدید",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "بیشتر از دیروز",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "فروش",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "بیشتر از دیروز",
    },
  },
];

export default statisticsCardsData;
