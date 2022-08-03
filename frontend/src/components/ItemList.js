import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";
import { ReactComponent as SadImg } from "../imgs/face-sad-tear.svg";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  let validSearch =
    props.items.length === 0 &&
    (!props.searchText || props.searchText.length < 3);

  if (validSearch) {
    return (
      <div className="py-4 no-items">
        We couldn't find what you're looking for!
      </div>
    );
  }

  let filteredItems = props.items;
  if (props.searchText && props.searchText.length >= 3) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(props.searchText.toLowerCase().trim())
    );
  }

  if (filteredItems.length === 0) {
    return (
      <div
        id="empty"
        className="w-50 mx-auto my-4 py-4 text-center"
        style={{ backgroundColor: "hsla(100, 100%, 100%, .1)" }}
      >
        <p>
          <SadImg width="50" fill="currentColor" title="Sad face that found" />
        </p>
        <p className="mb-0 text-wrap">
          No items found for <strong>"{props.searchText}"</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-2">
      <div className="row">
        {filteredItems.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
