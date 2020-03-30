import React from "react";
import css from "./index.module.scss";
import Link from "next/link";
import { connect } from "react-redux";

const MovieCard = ({ data, loading }) => {
    console.log("Movies", data);
    if (loading) {
        return (
            <div className={css.movie_card}>
                <div className={css.poster_wrapper}>
                    <div className={css.loading_image}></div>
                </div>
                <div className={css.title}>
                    <div className={css.loading_text}></div>
                </div>
            </div>
        );
    } else {
        if (data) {
            if (data.Response) {
                const { Poster, Title } = data;
                return (
                    <Link href="/[movie]" as={`${Title}`}>
                        <a className={css.movie_card}>
                            <div className={css.poster_wrapper}>
                                <img
                                    className={css.poster_img}
                                    src={Poster}
                                    alt={Title}
                                />
                            </div>
                            <div className={css.title}>{Title}</div>
                        </a>
                    </Link>
                );
            } else return <div>No such movie found!</div>;
        } else return <div>Please enter something in the search box!</div>;
    }
};

const mapStateToProps = ({ data, loading }) => ({
    data,
    loading
});

export default connect(mapStateToProps, null)(MovieCard);
