import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h4>/{props.results.phonetic}/</h4>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} index={index} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
