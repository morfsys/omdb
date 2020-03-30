import React, { useState, useEffect } from "react";
import Head from "next/head";
import MovieCard from "../components/MovieCard";
import SearchBox from "../components/SearchBox";
import css from "./index.module.scss";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
    console.log(router);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Movie Database</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <SearchBox />
            <div className={css.list_wrapper}>
                <MovieCard />
            </div>
        </>
    );
};

export default Home;
