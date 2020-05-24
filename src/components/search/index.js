import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SearchContainer } from "./styles";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search by title.."
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <Link to={`/search/${text}`}>
        <button onClick={() => setText("")}>
          <FaSearch />
        </button>
      </Link>
    </SearchContainer>
  );
};

export default Search;
