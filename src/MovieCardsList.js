import React from 'react';
import MovieCard from './MovieCard';

/*
Since this component just needs to render some data and does not need to keep
track of the component's internal state, we can make it a Stateless Functional
Component.
*/

const MovieCardsList = (props) => {
  const { profiles, users, movies } = props;
  const usersByMovie = {};

  profiles.forEach(profile => {
    const movieID = profile.favoriteMovieID;

    if (usersByMovie[movieID]) {
      usersByMovie[movieID].push(profile.userID);
    } else {
      usersByMovie[movieID] = [profile.userID];
    }
  });

  const movieCards = Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));

  /*
  Return JSX
  */
  return <ul>{movieCards}</ul>;
}

export default MovieCardsList;