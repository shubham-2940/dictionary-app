import React from "react";

export default function Result({ meaningData }) {
  // Check if meaningData is an array and not empty
  if (!Array.isArray(meaningData) || meaningData.length === 0) {
    return <h3 className="last-text">Please Enter the word to see meaning</h3>;
  }

  // Extract the first element (since dictionaryapi.dev returns an array of meanings)
  const firstMeaning = meaningData[0];

  // Extract the first two parts of speech from the meanings array
  const meaningsToDisplay = firstMeaning.meanings.slice(0, 2);

  // Filter the meanings to get only nouns
  // const nounMeanings = firstMeaning.meanings?.filter(meaning => meaning.partOfSpeech === 'noun');

  // if (!nounMeanings || nounMeanings.length === 0) {
  //   return <h3 className="no-def">No noun definitions available.</h3>;
  // }

  if (!meaningsToDisplay || meaningsToDisplay.length === 0) {
    return <h3 className="no-def">No definitions available.</h3>;
  }

  // const firstDefinition = nounMeanings[0].definitions[0];
  // const synonyms = nounMeanings[0].synonyms;

  return (
    <div className="container mt-5 p-3">
      {firstMeaning.word ? (
        <>
          <h3 className="word-def">Word : {firstMeaning.word}</h3>
          {meaningsToDisplay.map((meaningDetail, index) => (
            <div key={index}>
              <h4 className="partOfSpeech">Part of speech : {meaningDetail.partOfSpeech}</h4>
              {meaningDetail.definitions &&
              meaningDetail.definitions.length > 0 ? (
                <>
                  {meaningDetail.definitions.map((def, idx) => (
                    <p key={idx} className="word-def">
                      Definition {idx + 1}: {def.definition}
                    </p>
                  ))}
                  {meaningDetail.synonyms &&
                  meaningDetail.synonyms.length > 0 ? (
                    <p>Synonym(s): {meaningDetail.synonyms.join(", ")}</p>
                  ) : (
                    <p>No synonyms available.</p>
                  )}
                </>
              ) : (
                <p>No definitions available.</p>
              )}
            </div>
          ))}
        </>
      ) : (
        <h3 className="text-center">Please Enter the word to see meaning</h3>
      )}
    </div>
  );
}
