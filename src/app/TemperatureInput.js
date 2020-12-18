import React from 'react';

const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }


    render() {
        const temparature = this.props.temparature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temparature in {scaleNames[scale]}:</legend>
                <input
                    value={temparature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }

}

export default TemperatureInput;