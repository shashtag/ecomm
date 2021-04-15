import React, { useEffect } from "react";
import { useParams } from "react-router";
import { search } from "../API/Get";

const Search = () => {
  const { query } = useParams();

  useEffect(() => {
    search(query);
    return () => {};
  }, [query]);

  return <div>ssss</div>;
};

export default Search;
