import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.index + 1})<em> {props.meaning.definition} </em>{" "}
      </p>
      <p> {props.meaning.example} </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
