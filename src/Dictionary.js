import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    return console.log(response.data.meanings[0]);
  }
  function search(event) {
    event.preventDefault();
    const apiKey = "036afccb5b3e1756f153fo40e081f7t7";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordSubmit(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordSubmit} />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
