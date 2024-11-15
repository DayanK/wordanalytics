import React from "react";

type TStat = {
  number: number,
  label:string,
}

type TStatsProps = {
  numberOfWords: number,
  numberOfCharacters: number,
  instagramCharacters: number,
  facebookCharacters: number,
}


function Stat ({ number, label } :TStat) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};


const Stats: React.FC<TStatsProps> = ({ numberOfWords, numberOfCharacters, instagramCharacters, facebookCharacters }) => {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instagramCharacters} label="Instagram" />
      <Stat number={facebookCharacters} label="Facebook" />
    </section>
  );
};

export default Stats