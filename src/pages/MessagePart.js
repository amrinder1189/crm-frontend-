import React from "react";

export const MessagePart = ({ Data }) => {
  console.log(Data)
  return (
    <div>
      {Data.length ? (
        Data.map((row, i) => (
          <div  className="message-part">
            <h5>{row.messageby}</h5>
            <div>
              <p>{row.date}</p>
              <p>{row.message}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>no</h1>
      )}
    </div>
  )};
