import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: "",
        valueMail: ""
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleChangeMail = (e) => {
        this.setState({
            valueMail: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
            valueMail: ""

        })
    }
    render() {
        return (
            <>
                <div className="contact">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Napisz do nas</h3>
                        <input value={this.state.valueMail} onChange={this.handleChangeMail} placeholder="Twój adres mailowy"></input>
                        <br />
                        <textarea value={this.state.value} onChange={this.handleChange} placeholder="Zostaw nam wiadomość"></textarea>
                        <button on>Wyślij</button>
                    </form>
                    <Prompt when={this.state.value} message="Wiadomość nie została wysłana, czy chcesz opuścić stronę?" />
                </div>
            </>
        );
    }
}

export default ContactPage;