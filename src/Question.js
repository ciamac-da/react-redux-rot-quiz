
import React from 'react';
// to import Checkbox from material-ui!!!
import Checkbox from '@material-ui/core/Checkbox';
// to import Button from material-ui!!!
// So we need it because of next Button
import Button from '@material-ui/core/Button';
// to import Favorite from materal-ui!!!
import Favorite from '@material-ui/icons/Favorite';
// to import FavBorder from materail-ui!!!
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
//Style


//
/*
  Die [Question] Komponente stellt eine Frage und alle antworten dar

  Sie wird über [props] mit der Frage, allen Antworten und dem Index der
  richtigen Antwork versorgt. Wenn der Spieler [Next] drückt,
  werden die Antworten ausgwertet und [nextQuestion] aus der [QuestionSet]
  Komponente aufgerufen.
 */
const heart = {
  color: "black"
}


const AnswerStyle = {
  color: "white",
}

// Step by step!!!
// 1st : question! 
// 2nd : correct!
// 3rd : answers! 
// 4th : chosen!
// 5th : select!
// 6th : nextQuestion
// 7th : classes!!!
export default function Question({
  question, correct, answers, chosen, select, nextQuestion, classes
}) {
  return (

    <div
      className="Cia">
      <h1>{question}</h1>
      {answers.map(
        (answer, index) => (
          <div key={index} className="answer" style={AnswerStyle}>
            <Checkbox
              onChange={select(index)}
              checked={chosen[index]}
              icon={<FavoriteBorder style={heart} />}
              checkedIcon={<Favorite style={AnswerStyle} />}
            /> {answer}
          </div>)
      )}

      <Button variant="contained" color="disabled" onClick={
        e => {
          const wasAnsweredCorrectly = chosen.reduce(
            (isCorrect, value, index) => {
              if (!isCorrect) return false; // wenn eine Antwort falsch ist ist die Frage immer falsch beantwortet
              if (value === false && index === correct) return false; // Wenn der Benuter nein gesag hat aber die antwor ist richtig
              if (value === true && index !== correct) return false; // Wenn der Benutzer ja gesagt hat aber die Antwort ist falsch
              return true;
            }
            , true);
          nextQuestion(wasAnsweredCorrectly ? 1 : 0);
        }}>

        Next
      </Button>
    </div>

  )
}
// I already did it as I difinded Question function!!!