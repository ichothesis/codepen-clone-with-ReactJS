import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor({
  displayName,
  language,
  scriptValue,
  onChange,
}) {
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O</button>
      </div>
      <ControlledEditor
        onBeforeChange={(editor, data, value) => onChange(value)}
        value={scriptValue}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          theme: "material",
          mode: language,
          lineNumbers: true,
        }}
      />
    </div>
  );
}
