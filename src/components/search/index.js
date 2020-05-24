import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContainer } from "./styles";

const Search = ({ onClick }) => {
  const [text, setText] = useState("");
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search by title.."
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button onClick={onClick}>
        <FaSearch />
      </button>
    </SearchContainer>
  );
};

export default Search;
