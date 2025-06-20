import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h4>/{props.results.phonetic}/</h4>
        </section>

        {props.results.meanings.slice(0, 5).map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} index={index} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
