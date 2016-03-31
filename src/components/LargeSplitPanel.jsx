var React = require('react');

var LargeSplitPanel = React.createClass({

    render: function() {

        panelStyle = {
            height: 300,
            background: "#484D4D"

        };

        panelTopStyle = {
            height: 210,
            background: this.props.color
        };

        footerValueStyle = {
            color: "white",
            fontSize: "2em"
        };

        footerDescriptionStyle = {
            color: "#B0B1B1",
            fontSize: "1.15em"
        }

        return (
            <div style={panelStyle} className='panel panel-default'>
                <div style={panelTopStyle} className='panel-heading'></div>
                <div className='row panel-body'>
                    <div className='col-xs-4 text-center'>
                        <div style={footerValueStyle} className='row'>
                            {this.props.footerValueColumn1}
                        </div>
                        <div style={footerDescriptionStyle} className='row'>
                            {this.props.footerDescriptionColumn1}
                        </div>
                    </div>
                    <div className='col-xs-4 text-center'>
                        <div style={footerValueStyle} className='row'>
                            {this.props.footerValueColumn2}
                        </div>
                        <div style={footerDescriptionStyle} className='row'>
                            {this.props.footerDescriptionColumn2}
                        </div>
                    </div>
                    <div className='col-xs-4 text-center'>
                        <div style={footerValueStyle} className='row'>
                            {this.props.footerValueColumn3}
                        </div>
                        <div style={footerDescriptionStyle} className='row'>
                            {this.props.footerDescriptionColumn3}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LargeSplitPanel;
