export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly: null,
    newReleases: null,
    featuredplaylists: null,
    categories: null,
    mysavedtracks: null,
    userplaylists: null,
    followedartists: null,
    recommendations: null,
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
      case "NEW_RELEASES":
        return {
          ...state,
          newReleases: action.newReleases,
        };
      case "FEATURED_PLAYLISTS":
        return {
          ...state,
          featuredplaylists: action.featuredplaylists,
        };
      case "CATEGORIES":
        return {
          ...state,
          categories: action.categories,
        };
      case "MY_SAVED_TRACKS":
        return {
          ...state,
          mysavedtracks: action.mysavedtracks,
        };
      case "USER_PLAYLISTS":
        return {
          ...state,
          userplaylists: action.userplaylists,
        };
      case "FOLLOWED_ARTISTS":
        return {
          ...state,
          followedartists: action.followedartists,
        };
      case "RECOMMENDATIONS":
        return {
          ...state,
          recommendations: action.recommendations,
        };
      default:
        return state;
    }
  };
  