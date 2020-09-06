import { Line, LineChart } from "./types";

interface PrepareChartData extends LineChart {
  optins: boolean;
  recipients: boolean;
}

export const prepareChartData = ({
  listOptins,
  listRecipients,
  optins,
  recipients,
}: PrepareChartData) => {
  let chartData = [];
  if (optins && recipients) {
    chartData = [["Year", "Opt-ins", "Recipients"]];
    Object.keys(listOptins).forEach((key, index) => {
      if (listRecipients[index]) {
        chartData.push([
          listOptins[key].date,
          listOptins[key].count,
          listRecipients[index].count,
        ]);
      }
    });
  } else if (optins && !recipients) {
    chartData = [["Year", "Opt-ins"]];
    Object.keys(listOptins).forEach((key, index) => {
      if (listRecipients[index]) {
        chartData.push([listOptins[key].date, listOptins[key].count]);
      }
    });
  } else if (!optins && recipients) {
    chartData = [["Year", "Recipients"]];
    Object.keys(listOptins).forEach((key, index) => {
      if (listRecipients[index]) {
        chartData.push([listOptins[key].date, listRecipients[index].count]);
      }
    });
  } else {
    chartData = [["Year", "Unselected", "Unselected"], ["", 0, 0]];
  }

  return chartData;
};
