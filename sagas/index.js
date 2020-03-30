/* global fetch */
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { put, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../actions";

es6promise.polyfill();

const delay = ms => new Promise(res => setTimeout(res, ms));

function* fetchMovie({ payload }) {
    // This payload contains the query searched by user
    // Add the below line in fetch with 'payload' as a param
    // http://www.omdbapi.com/?apikey=98aa7ccf&t=payload&

    // const json = yield fetch(
    //     `https://api.tvmaze.com/search/shows?q=${payload}`
    // ).then(response => response.json());
    // yield put({ type: actionTypes.DATA_RECEIVED, payload: json });

    const json = {
        Title: "Guardians of the Galaxy Vol. 2",
        Year: "2017",
        Rated: "PG-13",
        Released: "05 May 2017",
        Runtime: "136 min",
        Genre: "Action, Adventure, Comedy, Sci-Fi",
        Director: "James Gunn",
        Writer:
            "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
        Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        Plot:
            "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
        Language: "English",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 14 wins & 52 nominations.",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
        Ratings: [
            {
                Source: "Internet Movie Database",
                Value: "7.6/10"
            },
            {
                Source: "Rotten Tomatoes",
                Value: "85%"
            },
            {
                Source: "Metacritic",
                Value: "67/100"
            }
        ],
        Metascore: "67",
        imdbRating: "7.6",
        imdbVotes: "526,626",
        imdbID: "tt3896198",
        Type: "movie",
        DVD: "22 Aug 2017",
        BoxOffice: "$389,804,217",
        Production: "Walt Disney Pictures",
        Website: "N/A",
        Response: "True"
    };
    delay(1000);
    yield put({ type: actionTypes.DATA_RECEIVED, payload: json });
}
function* actionWatcher() {
    yield takeLatest(actionTypes.SEARCH_MOVIE, fetchMovie);
}
export default function* rootSaga() {
    yield all([actionWatcher()]);
}
