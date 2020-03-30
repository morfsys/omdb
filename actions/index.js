export const actionTypes = {
    SEARCH_MOVIE: "SEARCH_MOVIE",
    DATA_RECEIVED: "DATA_RECEIVED"
};

export const searchMovie = title => ({
    type: actionTypes.SEARCH_MOVIE,
    payload: title
});
