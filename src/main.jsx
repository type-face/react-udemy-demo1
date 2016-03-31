var React = require('react');
var ReactDom = require('react-dom');
var SmallSplitPanel = require('./components/SmallSplitPanel.jsx');

ReactDom.render(<SmallSplitPanel headerText="20" bodyText="New followers added this month" />, document.getElementById('followers'));
ReactDom.render(<SmallSplitPanel headerText="$1250" titleText="super text" headerColor="blue" bodyText="Average monthly income" />, document.getElementById('avgMonthlyIncome'));
