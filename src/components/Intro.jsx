import React, { useEffect, useState } from "react";
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/gruvbox-dark.css";

import styles from "./Intro.module.css";
import markdownUrl from "../assets/intro.md";

const Intro = () => {
  const [markdownHTML, setMarkdownHTML] = useState("");

  useEffect(() => {
    fetch(
      markdownUrl
    )
      .then(r => r.text())
      .then(text => {
        setMarkdownHTML(marked(text, {
          highlight: function(code) {
            return highlight.highlightAuto(code).value
          }
        }));
      })
      .catch(error => console.log(error));
  }, []);

  if (!markdownHTML) return <p>Đang tải nội dung</p>;
  return <div className={styles.appMarkdownOveride} dangerouslySetInnerHTML={{ __html: markdownHTML }} />;
};

export default Intro;
