import React, { useRef } from "react";

export default function Search(props) {
  const searchInput = useRef();
  return (
    <div className="d-flex justify-content-center">
      <input
        type="search"
        className="form-control"
        placeholder="Enter to a word to see meaning"
        onChange={() => props.searchHandler(searchInput.current.value)}
        value={props.searchData}
        ref={searchInput}
      />
      <button
        className="btn bg-primary text-white"
        onClick={props.searchMeaning}
      >
        Search
      </button>
    </div>
  );
}
