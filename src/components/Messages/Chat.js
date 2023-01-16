import React, { useState, useRef } from "react";
import { MessageCon, MessageTextCon, MessageTimestamp } from "./MessageElements";

export default function Chat({ messages }) {
    const [myHandle, setMyHandle] = useState("brian");
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const prevHandle = useRef(null);
  let sameHandleCount = 0;
  let timestamp = null;
  
  return (
    <div>
      {messages.length > 0 &&
        messages.map((message, index) => {
          let timestamp = null;
          if (prevHandle.current === null || prevHandle.current !== message.handle) {
            prevHandle.current = message.handle;
            sameHandleCount = 1;
            timestamp = <MessageTimestamp className="timestamp">{message.timestamp}</MessageTimestamp>;
          } else {
            sameHandleCount++;
            if (sameHandleCount === 2) {
              timestamp = <div className="timestamp">{message.timestamp}</div>;
            }
          }
          // check if message is last one
          if(messages.length -1 === index){
            timestamp = <div className="timestamp">{message.timestamp}</div>;
          }
          return (
            <MessageCon
                key={index}
                yourMessage={message.handle === myHandle ? true : false}
                
            >
              <MessageTextCon>{message.text}</MessageTextCon>
              {timestamp}
            </MessageCon>
          );
        })}
    </div>
  );
}
