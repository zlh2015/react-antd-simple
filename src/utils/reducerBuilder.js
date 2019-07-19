const requestReducer = (startAction, finishAction) => (
    state = {
        loading: false,
        result: null
    }, 
    action) => {
    switch (action.type) {
        case startAction:
            return {
                loading: true,
                result: null
            };
        case finishAction:
            return {
                loading: false,
                result: action.payload
            };
        default:
            return state;
    }
};

export { requestReducer };