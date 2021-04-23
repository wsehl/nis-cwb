import React from "react";
import Layout from "@theme/Layout";
import Frame from "@site/src/components/Frame";

function App() {
  const url = `https://cie-ebook.ml/glossary-app`;
  return (
    <Layout title="Chemical Glossary App">
      <Frame
        src={url}
        height="calc(100vh - 100%)"
        width="100%"
        style={{
          minHeight: "calc(100vh - 70px)",
          border: "none",
        }}
      />
    </Layout>
  );
}

export default App;
