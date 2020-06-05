cont isLoadingReducer= ({Initiate, Passed, Failed }, reducer) => {
    return (state, action) => {
        switch (action.type) {
            case Initiate:
                return {
                    ...state,
                    loading: true,
                    error: null
                };
            case Passed:
                return {
                    ...state,
                    loading: false,
                    result: action.payload
                };
            case Failed:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
            default:
                return reducer (state, action);
        }
    }
}

