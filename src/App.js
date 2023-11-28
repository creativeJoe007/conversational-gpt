import React from "react";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import ChatInterface from "./ChatInterface";

import "./App.css";

function App() {
  const [isChatOpen, setChatOpen] = React.useState(false);
  return (
    <div className="App">
      {!isChatOpen ? (
        <FloatButton
          icon={<QuestionCircleOutlined />}
          description="Do you need help?"
          shape="square"
          type="default"
          style={{ right: 40, bottom: 100, width: 150, padding: ".5rem .5rem", borderColor: "rgb(2, 71, 49)" }}
          onClick={() => setChatOpen(true)}
        >
        </FloatButton>
      ) : (
        <ChatInterface closeHandler={setChatOpen}/>
      )}
    </div>
  );
}

export default App;
