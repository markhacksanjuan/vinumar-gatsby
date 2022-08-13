export const historyState = (state, dispatch) => {
    if(typeof state === 'object'){
        if(state.referrer === null && state.key){
            dispatch({
                type: 'EN'
            })
        }
    }
}