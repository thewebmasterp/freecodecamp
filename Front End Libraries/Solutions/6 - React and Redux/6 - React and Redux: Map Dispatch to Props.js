const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};
  
// change code below this line
  
const mapDispatchToProps = dispatch => ({
    submitNewMessage: message => {
        dispatch(addMessage(message))
    }
});