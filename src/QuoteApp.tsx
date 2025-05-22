import React from 'react';

interface Props {
    quotes: string[];
}

interface State {
    currentIndex: number
}

class QuoteApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentIndex: 0 };
    }

    getIndex = (): number => {
        const min: number = 0;
        const max: number = this.props.quotes.length - 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

    getNextQuote = (): void => {
        this.setState({
            currentIndex: this.getIndex()
        })
    }

    add = (x: number, y: number): number => {
        return x + y;
    }

    render() {
        const quoteToDisplay = this.props.quotes[this.state.currentIndex];
        return <>
            <p>State and Props using Typescript</p>
            <h1>{quoteToDisplay}</h1>
            <button onClick={this.getNextQuote}>Next Interest</button>
        </>
    }
}

export default QuoteApp;