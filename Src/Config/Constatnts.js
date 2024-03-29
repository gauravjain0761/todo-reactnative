export const dummyData = [
  {
    task: "Read marketing articals",
    date: "12/16/2022",
    priority: "Urgent",
    category: "Personal",
    isChecked: false,
  },
  {
    task: "Buy some dog food",
    date: "12/16/2022",
    priority: "Urgent",
    category: "Personal",
    isChecked: false,
  },
  {
    task: "Going to market to take vegatable",
    date: "12/16/2022",
    priority: "High",
    category: "Personal",
    isChecked: false,
  },
  {
    task: "Analyze all the risk",
    date: "12/16/2022",
    priority: "High",
    category: "Meeting",
    isChecked: false,
  },
  {
    task: "Release alpha version",
    date: "12/16/2022",
    priority: "Medium",
    category: "Meeting",
    isChecked: false,
  },
  {
    task: "Analyze website traffic",
    date: "12/30/2022",
    priority: "Low",
    category: "Meeting",
    isChecked: false,
  },
  {
    task: "Call US resellers",
    date: "12/30/2022",
    priority: "Low",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Monitor positions in Google",
    date: "12/30/2022",
    priority: "Very Low",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Call the advertising company",
    date: "12/30/2022",
    priority: "Very Low",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Play tennis",
    date: "12/31/2022",
    priority: "Very Low",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Develop promotion plan",
    date: "12/31/2022",
    priority: "No Priority",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Meet the developer",
    date: "12/31/2022",
    priority: "No Priority",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Meet the president",
    date: "12/31/2022",
    priority: "No Priority",
    category: "Calls",
    isChecked: false,
  },
  {
    task: "Test beta version",
    date: "12/31/2022",
    priority: "No Priority",
    category: "Calls",
    isChecked: false,
  },
];

export const timeStampToDate = (seconds) => {
  var timestamp = seconds;
  var myDate = new Date(timestamp * 1000);
  return myDate.toJSON();
};
