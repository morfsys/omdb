import React, { useState } from "react";
import css from "./index.module.scss";
import { connect } from "react-redux";
import { searchMovie } from "../../actions";

const SearchBox = ({ searchMovie }) => {
    const [query, setQuery] = useState("");

    const handleQuery = e => {
        setQuery(e.target.value);
        searchMovie(e.target.value);
    };

    return (
        <div className={css.search_wrapper}>
            <div className={css.search_box}>
                <input
                    type="text"
                    className={css.search_box_input}
                    value={query}
                    onChange={e => handleQuery(e)}
                    placeholder="Search for movie title"
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    searchMovie
};

export default connect(null, mapDispatchToProps)(SearchBox);
