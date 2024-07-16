import React, { useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      }).catch(error => handleError(error, 'getMe'));

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      }).catch(error => handleError(error, 'getUserPlaylists'));

      spotify.getPlaylist('37i9dQZEVXcCfkRPbVVNIe').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
      }).catch(error => handleError(error, 'getPlaylist'));

      spotify.getNewReleases().then(newReleases => {
        dispatch({
          type: "NEW_RELEASES",
          newReleases: newReleases
        });
      }).catch(error => handleError(error, 'getNewReleases'));

      spotify.getFeaturedPlaylists().then(featuredplaylists => {
        dispatch({
          type: "FEATURED_PLAYLISTS",
          featuredplaylists: featuredplaylists
        });
      }).catch(error => handleError(error, 'getFeaturedPlaylists'));

      spotify.getCategories().then(categories => {
        dispatch({
          type: "CATEGORIES",
          categories: categories
        });
      }).catch(error => handleError(error, 'getCategories'));

      spotify.getMySavedTracks().then(mysavedtracks => {
        dispatch({
          type: "MY_SAVED_TRACKS",
          mysavedtracks: mysavedtracks
        });
      }).catch(error => handleError(error, 'getMySavedTracks'));

      spotify.getUserPlaylists().then(userplaylists => {
        dispatch({
          type: "USER_PLAYLISTS",
          userplaylists: userplaylists
        });
      }).catch(error => handleError(error, 'getUserPlaylists'));

      spotify.getFollowedArtists().then(followedartists => {
        dispatch({
          type: "FOLLOWED_ARTISTS",
          followedartists: followedartists
        });
      }).catch(error => handleError(error, 'getFollowedArtists'));

      spotify.getRecommendations().then(recommendations => {
        dispatch({
          type: "RECOMMENDATIONS",
          recommendations: recommendations
        });
      }).catch(error => handleError(error, 'getRecommendations'));
    }
  }, [dispatch]);

  const handleError = (error, apiMethod) => {
    console.error(`Error in ${apiMethod}:`, error);
  };

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
