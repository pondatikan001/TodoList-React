import React from "react";
import ListItem from "./Listitem";

function Content({ title, list, type }) {
  return (
    <div className="lane-content">
      <div className="lane-title">{title}</div>
      <ul className="list-container">
        {list.map((item, index) => (
          <ListItem key={item.id} index={index} type={type}>
            {item.Content}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
export default Content;
