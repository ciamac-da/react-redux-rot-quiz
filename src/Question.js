import React from 'react';
// to import Checkbox from material-ui!!!
import Checkbox       from '@material-ui/core/Checkbox';
// to import Button from material-ui!!!
// So we need it because of next Button
import Button         from '@material-ui/core/Button';
// to import Favorite from materal-ui!!!
import Favorite       from '@material-ui/icons/Favorite';
// to import FavBorder from materail-ui!!!
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
//Style
import "./App.css";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardTitle from "@material-ui/core/CardTitle";
import CardText from "@material-ui/core/CardText";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";


//
/*
  Die [Question] Komponente stellt eine Frage und alle antworten dar

  Sie wird über [props] mit der Frage, allen Antworten und dem Index der
  richtigen Antwork versorgt. Wenn der Spieler [Next] drückt,
  werden die Antworten ausgwertet und [nextQuestion] aus der [QuestionSet]
  Komponente aufgerufen.
 */


const AnswerStyle = {
  color:"black",
  display:"inline-table"
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
          question, correct, answers, chosen, select, nextQuestion ,classes
          
        }){ return (
<div> 


<Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url("./codingQuotes.png") bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
</Card>
      


    <h1>{question}</h1>
    { answers.map(
      (answer,index)=> (
        <div key={index} className="answer" style={AnswerStyle}>
          <Checkbox
            onChange={select(index)}
            checked={chosen[index]}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          /> {answer}
        </div> )
      )}
      
      <Button variant="contained" color="primary" onClick={
        e => {
          const wasAnsweredCorrectly = chosen.reduce(
            (isCorrect,value,index)=> {
              if ( ! isCorrect ) return false; // wenn eine Antwort falsch ist ist die Frage immer falsch beantwortet
              if ( value === false && index === correct ) return false; // Wenn der Benuter nein gesag hat aber die antwor ist richtig
              if ( value === true  && index !== correct ) return false; // Wenn der Benutzer ja gesagt hat aber die Antwort ist falsch
              return true;
            }
          ,true);
          nextQuestion(wasAnsweredCorrectly ? 1 : 0);
      }}>
      
        Next
      </Button>
  </div> 

  )
}

// export the component to app js !!!
// I already did it as I difinded Question function!!!