import React, { useState } from "react";
import Editor from "./Editor";
import "../index.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const source = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          onChange={setHtml}
          scriptValue={html}
        />
        <Editor
          language="css"
          displayName="CSS"
          onChange={setCss}
          scriptValue={css}
        />
        <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          onChange={setJs}
          scriptValue={js}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
