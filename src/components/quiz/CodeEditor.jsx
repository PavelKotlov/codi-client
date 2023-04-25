import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default function CodeEditor() {
  const [code, setCode] = useState();

  return (
    <AceEditor
      mode="java"
      theme="monokai"
      onChange={(newCode) => setCode(newCode)}
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      width="95%"
    />
  );
}
