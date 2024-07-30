import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search(props) {
  const searchInput = useRef();
  return (
    <div className="d-flex gap-2">
      <input
        type="search"
        className="form-control"
        placeholder="Enter to a word to see meaning"
        onChange={() => props.searchHandler(searchInput.current.value)}
        value={props.searchData}
        ref={searchInput}
      />
      <button
        className="btn bg-primary"
        onClick={props.searchMeaning}
      >
        Search
      </button>
    </div>
  );
}
