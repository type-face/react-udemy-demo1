var React = require('react');

var SmallSplitPanel = React.createClass({

    render: function() {

        panelStyle = {
            height: 180,
            marginTop: 10
        };

        panelHeaderStyle ={
            backgroundImage: null,
            background: '#FFFFFF',
            borderBottomWidth: 0,
            color: '#656565',
        };

        panelHeaderH3 = {
            marginTop: 0,
            marginBottom: 0,
            fontSize: '2em',
            fontWeight: 500
        }

        headerSuperTextStyle = {
            marginTop: 20
        }

        panelBodyStyle = {
            color: '#B9BABA',
            fontSize: '1.25em',
        }

        if (!this.props.titleText) {
            panelBodyStyle.paddingTop = 0
        }

        if (this.props.headerColor) {
            panelHeaderStyle.background = this.props.headerColor;
            panelHeaderStyle.borderBottomWidth = '1';
            panelHeaderStyle.color = 'white';
        };

        return (
            <div style={panelStyle} className='panel panel-default'>
                <div style={panelHeaderStyle} className='panel-heading'>
                    <div style={headerSuperTextStyle}>
                        {this.props.titleText}
                    </div>
                    <h3 style={panelHeaderH3}>
                        {this.props.headerText}
                    </h3>
                </div>
                <div style={panelBodyStyle} className='panel-body'>
                    {this.props.bodyText}
                </div>
            </div>
        )
    }
});

module.exports = SmallSplitPanel;
