import React, { useEffect } from "react";
import Link from "next/link";
import css from "./index.module.scss";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { searchMovie } from "../../actions";

const MovieDetails = ({ data, loading, searchMovie }) => {
    console.log(data, loading);
    const router = useRouter();

    useEffect(() => {
        searchMovie(router.query.movie);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    } else {
        if (data) {
            if (data.Response) {
                const { Poster, Title, Director, imdbRating } = data;
                return (
                    // <>Something</>
                    <div className={css.container}>
                        <div className={css.movie_wrapper}>
                            <div className={css.movie_poster}>
                                <img src={Poster} alt={Title} />
                            </div>
                            <div className={css.movie_details}>
                                <div className={css.title}>{Title}</div>
                                <div className={css.director}>
                                    Directed by: {Director}
                                </div>
                                <div className={css.rating}>
                                    <img
                                        src="/images/logo-imdb.svg"
                                        alt="IMDB"
                                    />{" "}
                                    : {imdbRating}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else return <div>No such movie found!</div>;
        } else return <div>Something went wrong!</div>;
    }
};

const mapStateToProps = ({ data, loading }) => ({
    data,
    loading
});

const mapDispatchToProps = {
    searchMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
