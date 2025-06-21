import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="part-of-speech">
        <big>{props.meaning.partOfSpeech}</big>
      </h3>
      <p className="definition">
        <em>
          {props.index + 1}) {props.meaning.definition}
        </em>
      </p>

      {props.meaning.example && (
        <p className="example">
          <strong>Example: </strong>
          {props.meaning.example}
        </p>
      )}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
