import React from "react";
import "./JournalItem.scss";

function JournalItem({ title, text, date }) {
  const formatedDate = date
    ? new Intl.DateTimeFormat("uz-Uz").format(date)
    : "";

  return (
    <>
      <h2 className="journal-item_header">{title}</h2>
      <div className="journal-item_body">
        <div className="journal-item_date"> {formatedDate} </div>
        <div className="journal-item_text">{text}</div>
      </div>
    </>
  );
}

export default JournalItem;
