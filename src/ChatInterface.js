/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CloseOutlined } from "@ant-design/icons";

const ChatInterface = ({closeHandler}) => {
  return (
    <div className="iframe_container">
      <a
        className="iframe_link"
        onClick={() => {
          closeHandler(false);
        }}
      >{<CloseOutlined />}</a>
      <iframe
        src="https://web.powerva.microsoft.com/environments/Default-6587a828-6beb-4938-846c-32655981874e/bots/cr86f_copilotTeam07/webchat?__version__=2"
        frameborder="0"
        style={{ height: "100vh", right: 0 }}
        align="right"
      ></iframe>
    </div>
  );
};

export default ChatInterface;
