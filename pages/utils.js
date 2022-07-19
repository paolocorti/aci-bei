import { useState, useEffect } from "react";
import data from "./api/data.json";

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export function useContent(lang, key) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data);
  }, [data]);

  return groupBy(content, "key");
}

export function getContent(content, key) {
  return content[key] ? content[key][0].value : "";
}

export function getLink(content, key) {
  return content[key] ? content[key][0].link : "";
}
