export const FetchMoviesAction = (movies) => {
  return {
    type: "FETCH_MOVIES",
    payload: movies,
  };
};
