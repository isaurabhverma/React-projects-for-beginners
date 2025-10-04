"use client";
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

export default function SandpackEditor({
  code,
  template = "react",
  height = 600,
  showConsole = true,
  showNavigator = true,
  runOnChange = true,
}) {
  return (
    <div className="rounded-lg overflow-hidden border mr-2 ml-2 border-fuchsia-800 bg-black text-white shadow-md">
      <Sandpack
        template={template}
        theme={sandpackDark}
        files={{ "/App.js": code }}
        options={{
          showTabs: true,
          showConsoleButton: true,
          showConsole,
          showNavigator,
          runOnChange,
          editorHeight: height,
        }}
      />
    </div>
  );
}
