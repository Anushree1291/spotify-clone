export const initialState ={
    user: null,
    playlists:[],
    playing: false,
    item: null,
    token: "BQB3_qxDr9qW66NHCATq64OicaXIvIOL7Ilp7YKQicZ8vEgDP3Sa4hbP5esJbDcV5kYcJsbXdEEDfEqSwvnPZh64PuN14OzJ6ym0NHP4jvXThmwhtrQ2RYw9J3wPM5-4K8c4R92AUnGN66gH-yLw1n3oIDXNJgf14EYi1RXKmxaFBAz1BTfegqHsSUKIIbdayF-IRwfyaop_ZmaOzezS"
};


export const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
};