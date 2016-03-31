var React = require('react');
var ReactDom = require('react-dom');
var SmallSplitPanel = require('./components/SmallSplitPanel.jsx');
var WeatherPanel = require('./components/WeatherPanel.jsx');
var LargeSplitPanel = require('./components/LargeSplitPanel.jsx');

ReactDom.render(<SmallSplitPanel headerText='20' bodyText='New followers added this month' />, document.getElementById('followers'));
ReactDom.render(<SmallSplitPanel headerText='$1250' bodyText='Average Monthly Income' />, document.getElementById('avgMonthlyIncome'));
ReactDom.render(<SmallSplitPanel headerText='$13865' bodyText='Yearly Income Goal' />, document.getElementById('yearlyIncomeGoal'));
ReactDom.render(<WeatherPanel temperature='20' city='Winnipeg' color='#FF8A00' />, document.getElementById('weather'));
ReactDom.render(<LargeSplitPanel color='#0096D0' footerValueColumn1='15080' footerDescriptionColumn1='Shot Views' footerValueColumn2='12000' footerDescriptionColumn2='Likes' footerValueColumn3='5100' footerDescriptionColumn3='Comments' />, document.getElementById('largeSplitPanel1'));
ReactDom.render(<LargeSplitPanel color='#CD59AE' footerValueColumn1='2345' footerDescriptionColumn1='Shot Views' footerValueColumn2='11111' footerDescriptionColumn2='Likes' footerValueColumn3='12352' footerDescriptionColumn3='Comments' />, document.getElementById('largeSplitPanel2'));
