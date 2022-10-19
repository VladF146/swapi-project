import { useState, useEffect } from "react";

export default function Loader({ url, label }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      response = await response.json();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>{`${label}: ${data.name ? data.name : data.title}`}</div>
    </>
  );
}
