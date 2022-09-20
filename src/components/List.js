import React from "react";
import PropTypes from "prop-types";

const List = ({ items }) => {
  return items.length ? (
    <ul className="list-group list-group-horizontal flex-wrap">
      {items &&
        items.length &&
        items.map((item) => (
          <li
            key={item}
            className="px-3 mx-1 rounded mb-2 list-group-item border"
          >
            {item}
          </li>
        ))}
    </ul>
  ) : null;
};

List.propTypes = { items: PropTypes.arrayOf(PropTypes.string) };

export default List;
