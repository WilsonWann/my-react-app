import React from 'react';

class BoilerVerdict extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let para;
        this.props.celsius >= 100
            ? para = <p>The water would boil.</p>
            : para = <p>The water would not boil.</p>

        return para;
    }

}

export default BoilerVerdict;