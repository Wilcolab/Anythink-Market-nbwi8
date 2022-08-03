import React from "react";
import { connect } from "react-redux";
import { APPLY_SEARCH_FILTER } from "../../constants/actionTypes";

const SearchBar = (props) => {
  // Hide the search bar by default
  const [isSearchHidden, setIsSearchHidden] = React.useState(true);

  const handleOnClick = (event) => {
    event.preventDefault();
    setIsSearchHidden(!isSearchHidden);
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;

    props.dispatch({
      type: APPLY_SEARCH_FILTER,
      payload: { searchText: value },
    });
  };

  return (
    <div className="container p-4 text-center">
      <div className="search-bar row">
        <div
          className="col text-right"
          id="get-part"
          style={{ cursor: "pointer" }}
          onClick={handleOnClick}
        >
          A place to get
        </div>

        {isSearchHidden ? (
          ""
        ) : (
          <div className="input-group rounded col">
            <input
              id="search-box"
              type="search"
              className="form-control rounded"
              placeholder="What is it that you truly desire?"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={onChangeHandler}
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="bi bi-search"></i>
            </span>
          </div>
        )}

        <div className="col text-left">
          the cool stuff.
        </div>
      </div>
    </div>
  );
};

export default connect()(SearchBar);
