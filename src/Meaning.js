import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <em>
          {props.index + 1}) {props.meaning.definition}
        </em>
      </p>

      {props.meaning.example && (
        <p>
          <strong>Example: </strong>
          {props.meaning.example}
        </p>
      )}

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
