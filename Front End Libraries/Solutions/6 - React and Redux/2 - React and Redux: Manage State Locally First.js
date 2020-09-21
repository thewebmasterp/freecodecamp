class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({input: event.target.value})
    }
  
    submitMessage() {
      this.setState(state => {
        return {messages: [...state.messages, state.input], input: ''}
      })
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input value={this.state.input} onChange={(e) => this.handleChange(e)}></input>
          <button onClick={this.submitMessage} >Add message</button>
          <ul>
          {this.state.messages.map(message => <li>{message}</li>)}
          </ul>
          { /* change code above this line */ }
        </div>
      );
    }
};
  