import React, { useEffect, useState } from 'react';
import _ from "lodash";
import { faCog, faGrinTears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Cowsay.module.css";

const Cowsay = () => {
  const [msg, setMsg] = useState("");
  const [cowsay, setCowsay] = useState("");
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    const EYES = ["..", "oo", "uu"];
    const API_URL = "https://easyapis.soue.tk/api";

    let timer = setTimeout(() => {
      toggleLoading(true);
      fetch(`${API_URL}/cowsay?text=${msg}&eyes=${EYES[_.random(0, 2, false)]}`)
        .then(r => r.text())
        .then(text => {
          toggleLoading(false);
          setCowsay(text);
        })
        .catch(err => {
          console.log(err);
          toggleLoading(false);
        });
    }, 500);

    return () => {
      timer && clearTimeout(timer);
    }
  }, [msg])

  return (
    <form className={styles.form}>
      <h2>Cowsay generator <FontAwesomeIcon icon={faGrinTears} /></h2>
      <input
        className={styles.messageBox}
        type="text"
        value={msg}
        placeholder="Type your message to change what the cow says"
        onChange={ev => setMsg(ev.target.value)} />
      {isLoading
        ? <FontAwesomeIcon
            icon={faCog}
            spin={true}
            size="4x"
          />
        : <textarea
            className={styles.cowsay}
            col={6}
            rows={6}
            readOnly={true}
            value={cowsay} />
        }
    </form>
  );
};

export default Cowsay;