import React from 'react'

class MarkMeaning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ""
        }

    }
    componentDidMount() {

        let correct = this.props.correct
        let challengeTextArea = document.getElementById('challenge-textarea')
        if (challengeTextArea) {
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }
    }
    selected(e){
        debugger
        this.setState({
            answer: e.target.valueOf().id
        })
    }


    render() {
        if (document.getElementById('skill-check-button')) {
            let correct = this.props.correct
            let challengeTextArea = document.getElementById('challenge-textarea')
            document.getElementById('skill-check-button').setAttribute('data-guess', correct)
        }

        return (
            <>
                <div className="challenge challenge-translate">
                    <h1 className="challenge-header">Mark the correct meaning</h1>
                    <div className="challenge-subbox">
                        <div className="challenge-translate-prompt">
                            
                            <span className="challenge-sentence">{this.props.sentence}</span>
                            {/* you'll interpolate above span from props later  */}
                        </div>

                        <div className="mark-meaning-content" id="m-m-c">
                            <ul className="m-m-ul">
                                <li className="m-m-li">
                                    <label className="m-m-label" htmlFor="radio1">
                                        <div className="m-m-number">1</div>
                                        <input type="radio" name="radios" id="radio1" className="m-m-input" onChange={this.selected.bind(this)} checked={this.state.answer ==="radio1"} value={this.props.phrase1}/>
                                        <div className="m-m-choice-div">{this.props.phrase1}</div>
                                    </label>
                                </li>

                                <li className="m-m-li">
                                    <label className="m-m-label" htmlFor="radio2">
                                        <div className="m-m-number">2</div>
                                        <input type="radio" name="radios" id="radio2" className="m-m-input" onChange={this.selected.bind(this)} checked={this.state.answer === "radio2"} value={this.props.phrase2}/>
                                        <div className="m-m-choice-div">{this.props.phrase2}</div>
                                    </label>
                                </li>

                                <li className="m-m-li">
                                    <label className="m-m-label" htmlFor="radio3">
                                        <div className="m-m-number">3</div>
                                        <input type="radio" name="radios" id="radio3" className="m-m-input" onChange={this.selected.bind(this)} checked={this.state.answer === "radio3"} value={this.props.phrase3}/>
                                        <div className="m-m-choice-div">{this.props.phrase3}</div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default MarkMeaning