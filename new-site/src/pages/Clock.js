import React, { Component } from "react";

class Watch extends Component {

    state = {
        date: new Date(),
    };


    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="mainApp">
                        <ClockTime date={this.state.date} />
                        <ClockDate date={this.state.date} />
                    </div>
                </div>
            </>);
    }
}

function ClockTime({ date }) {
    return <h1><ClockTimeHour date={date} />:<ClockTimeMinute date={date} />:<ClockTimeSecond date={date} /></h1>;
}

function ClockTimeHour({ date }) {
    return <>{date.getHours().toString().padStart(2, '0')}</>;
}

function ClockTimeMinute({ date }) {
    return <>{date.getMinutes().toString().padStart(2, '0')}</>;
}

function ClockTimeSecond({ date }) {
    return <>{date.getSeconds().toString().padStart(2, '0')}</>;
}

function ClockDate({ date }) {
    return <h1><ClockDateDay date={date} />.<ClockDateMonth date={date} />.<ClockDateYear date={date} /></h1>
}

function ClockDateYear({ date }) {
    return <>{date.getFullYear()}</>;
}

function ClockDateMonth({ date }) {
    return <>{(date.getMonth() + 1).toString().padStart(2, '0')}</>;
}

function ClockDateDay({ date }) {
    return <>{date.getDate().toString().padStart(2, '0')}</>;
}


function Clock() {
    return <Watch />;
}

export default Clock;