import React, { useState } from "react";
import css from "./index.module.scss";
import Link from "next/link";
import { connect } from "react-redux";
import { animated, useSpring } from "react-spring";

const MovieCard = ({ data, loading }) => {
    const [isMouseEnter, toggleIsMouseEnter] = useState(false);
    console.log(data);
    const { o } = useSpring({
        from: { o: 0 },
        o: isMouseEnter ? 0.7 : 0,
        config: { duration: 100 }
    });

    const renderMovie = () => {
        const { Poster, Title } = data;
        return (
            <Link href="/[movie]" as={`${Title}`}>
                <a
                    className={css.movie_card}
                    onMouseEnter={() => toggleIsMouseEnter(true)}
                    onMouseLeave={() => toggleIsMouseEnter(false)}
                >
                    {/* Overlay Starts */}
                    <animated.div
                        className={css.movie_card_overlay}
                        style={{
                            opacity: o.interpolate(o => o)
                        }}
                    ></animated.div>
                    <div className={css.overlay_btn}>
                        <animated.button
                            className={css.view_btn}
                            style={{
                                transform: o
                                    .interpolate({
                                        range: [0, 0.7],
                                        output: [10, 0]
                                    })
                                    .interpolate(o => `translateY(${o}px)`),
                                opacity: o
                                    .interpolate({
                                        range: [0, 0.7],
                                        output: [0, 1]
                                    })
                                    .interpolate(o => o)
                            }}
                        >
                            View
                        </animated.button>
                    </div>
                    {/* Overlay Ends */}
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
    };

    const renderLoader = () => {
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
    };

    return (
        <>
            {loading ? (
                <>{renderLoader()}</>
            ) : data !== null ? (
                data.Response != "False" ? (
                    <>{renderMovie()}</>
                ) : (
                    <div>No such movie found!</div>
                )
            ) : (
                <div>Please enter something in the search box!</div>
            )}
        </>
    );
};

const mapStateToProps = ({ data, loading }) => ({
    data,
    loading
});

export default connect(mapStateToProps, null)(MovieCard);
