import React from "react";
import css from "./index.module.scss";
import loaderCss from "../../components/MovieCard/index.module.scss";
import { connect } from "react-redux";
import { searchMovie } from "../../actions";

const MovieDetails = ({ data, loading }) => {
    const renderMovie = () => {
        const { Poster, Title, Director, imdbRating } = data;
        return (
            <div className={css.movie_wrapper}>
                <div className={css.movie_poster}>
                    <img src={Poster} alt={Title} />
                </div>
                <div className={css.movie_details}>
                    <div className={css.title}>{Title}</div>
                    <div className={css.director}>Directed by: {Director}</div>
                    <div className={css.actors}>
                        <div className={css.actor_text}>Actors:</div>
                        {data.Actors.split(",").map(e => (
                            <div key={e} className={css.actor_wrapper}>
                                <div className={css.actor}>{e.trim()}</div>
                            </div>
                        ))}
                    </div>
                    <div className={css.rating}>
                        <img src="/images/logo-imdb.svg" alt="IMDB" /> :{" "}
                        {imdbRating}
                    </div>
                </div>
            </div>
        );
    };

    const renderLoader = () => {
        return (
            <div className={css.movie_wrapper}>
                <div className={css.movie_poster}>
                    <div className={loaderCss.loading_image}></div>
                </div>
                <div className={css.movie_details}>
                    <div className={css.title}>
                        <div className={loaderCss.loading_text_title}></div>
                    </div>
                    <div className={css.director}>
                        <div className={loaderCss.loading_text_director}></div>
                    </div>
                    <div className={css.rating}>
                        <div className={loaderCss.loading_text_rating}></div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={css.container}>
            {loading ? (
                <>{renderLoader()}</>
            ) : data ? (
                data.Response != "False" ? (
                    <>{renderMovie()}</>
                ) : (
                    <div>No such movie found</div>
                )
            ) : (
                <div>Something went wrong!</div>
            )}
        </div>
    );
};

MovieDetails.getInitialProps = ({ ctx }) => {
    const { store, isServer, query } = ctx;
    if (!store.getState().data) {
        console.log("No data in store, hydrate the store from server!");
        store.dispatch(searchMovie(query.movie));
    } else {
        console.log("Data present, do not hydrate! Do nothing.");
    }
    return { isServer };
};

const mapStateToProps = ({ data, loading }) => ({
    data,
    loading
});

const mapDispatchToProps = {
    searchMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
