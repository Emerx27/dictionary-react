function Definitions({ data, error }) {
  if (Array.isArray(data) && data.length > 0) {
    const { word, meanings } = data[0];

    const wordSearched = <h2 className='main__def-word'>{word.toLowerCase()}</h2>
    const defs = meanings[0].definitions;

    const firstDefinition = <p className='main__def-first'>{defs[0].definition}</p>;
    const otherDefinitions = defs.length > 1 && defs.slice(1).map((def, i) => <li className='main__list-def' key={i}>{def.definition}</li>)

    return (
      <>
        <section className="main__def">
          {wordSearched}
          <h3 className="main__def-sub">Definition</h3>
          {firstDefinition}
        </section>
        {defs.length > 1 &&
          (<section className="main__sug">
            <h3 className="main__sug-title">Another Definitions</h3>
            <ul className="main__list">
              {otherDefinitions}
            </ul>
          </section>
          )}
      </>
    )
  }

  if (error) {
    return <h3 className="main__default">No results found</h3>
  } else {
    return <h3 className="main__default">Type a word...</h3>
  }
}

export default Definitions;