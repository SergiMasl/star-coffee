import React, { useState } from "react";

export default function LogBtm({ log }) {
  const [classNameProp, setClassNameProp] = useState(log.classProp);

  return (
    <a
      className={`log-btm-wrap ${
        classNameProp == "log_btm" ? "log_btm" : "sing_btn"
      }`}
    >
      {log.title}
    </a>
  );
}
