var React = require('react');

var WeatherPanel = React.createClass({

    render: function() {

        weatherWellStyle = {
            height: 180,
            marginTop: 10,
            background: this.props.color,
            color: 'white'
        }

        temperatureStyle = {
            fontSize: '3em',
        }

        return (
            <div style={weatherWellStyle} className='well well-lg text-center'>
                <div style={temperatureStyle} className='row'>
                    {this.props.temperature}&#xb0;
                </div>
                <div className='row'>
                    {this.props.city}
                </div>
            </div>
        )
    }
});

module.exports = WeatherPanel;
