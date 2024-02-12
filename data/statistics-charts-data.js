import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
    {
      name: "Sales",
      color : 'black',
      data: [30, 20, 100, 320, 600, 150, 400, 330, 400],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTasksChart = {
  ...dailySalesChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "red",
    title: "بازدید وبسایت",
    description: "آخرین عملکرد کمپین    ",
    footer: "2 روز پیش",
    chart: websiteViewsChart,
  },
  {
    color: "purple",
    title: "فروش روزانه",
    description: "افزایش 15 درصدی در فروش امروز",
    footer: "4 دقیقه پیش",
    chart: dailySalesChart,
  },
  {
    color: "green",
    title: "وظایف تکمیل شده",
    description: "آخرین عملکرد کمپین    ",
    footer: "به تازگی",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
