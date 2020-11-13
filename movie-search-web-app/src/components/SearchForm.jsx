import React, {useState} from "react";

const SearchForm = (props) => {
  const {
    datas: {
      query,
    },
    methods: {
      setQuery,
      search,
    },
  } = props;
  return (
    <>
     <form className="form" onSubmit={search}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
