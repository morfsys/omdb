import React, { useEffect } from "react";
import css from "./index.module.scss";
import loaderCss from "../../components/MovieCard/index.module.scss";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { searchMovie } from "../../actions";

const MovieDetails = ({ data, loading, searchMovie }) => {
    const router = useRouter();

    useEffect(() => {
        searchMovie(router.query.movie);
    }, []);

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

const mapStateToProps = ({ data, loading }) => ({
    data,
    loading
});

const mapDispatchToProps = {
    searchMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
