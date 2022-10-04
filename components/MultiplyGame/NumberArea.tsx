import Main from "../Main";
import { BasicButtonGroup, GridItem } from "./MultiplyGame";
import { makeStyles } from "@material-ui/core/styles";
import { addRound, addToAnswer, clearAnswer } from "../../redux/gamePlaySlice";
import { useState } from "react";
import randomIntFromInterval from "../../util/randomInt";
import { useDispatch, useSelector } from "react-redux";
import delay from "../../util/delay";

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
}));
export const useStylesTwo = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    paddingLeft: 33,
  },
}));

export default function NumberArea(props: any) {
  const classes = useStyles();
  const classesTwo = useStylesTwo();

//   const [answer, setAnswer] = useState("");
//   const [firstRando, setFirstRando] = useState(randomIntFromInterval(2, 10));
//   const [secondRando, setSecondRando] = useState(randomIntFromInterval(2, 10));
  
//   const [showSolution, setShowSolution] = useState(false);
  const dispatch = useDispatch();
  const {answer, firstRando, secondRando, setFirstRando, setSecondRando, setShowSolution} = props;

  return (
    <GridItem classes={classes} sm={6} min="20vh" text="Number area">
      <BasicButtonGroup
        one="1"
        two="2"
        three="3"
        four="4"
        five="5"
        actionPrimaryColor="secondary"
        actionSecomdaryColor="primary"
        actionThirdColor="primary"
        actionFourthColor="secondary"
        actionFifthColor="primary"
        onClick={(e: any) => {
          // setAnswer(answer + e.target.innerText);
          console.log("click", e.target.innerText);
          dispatch(addToAnswer(e.target.innerText));
        }}
      />
      <br />
      <BasicButtonGroup
        one="6"
        two="7"
        three="8"
        four="9"
        five="0"
        actionPrimaryColor="primary"
        actionSecomdaryColor="secondary"
        actionThirdColor="secondary"
        actionFourthColor="primary"
        actionFifthColor="secondary"
        onClick={(e: any) => {
          // setAnswer(answer + e.target.innerText);
          dispatch(addToAnswer(e.target.innerText));
        }}
      />
      <br />
      <BasicButtonGroup
        onClick={(e: any) => {
          if (e.target.innerText === "CLEAR") {
            dispatch(clearAnswer());
          } else {
            const payload = {
              firstNumber: firstRando,
              secondNumber: secondRando,
              answer: parseInt(answer),
            };
            alert(JSON.stringify(payload));
            dispatch(addRound(payload));
            setShowSolution(true);
            delay(1000).then(() => {
              setShowSolution(false);
              dispatch(clearAnswer());
              setFirstRando(randomIntFromInterval(2, 10));
              setSecondRando(randomIntFromInterval(2, 10));
            //   setAnswer("");
            });
          }
        }}
        one="CLEAR"
        two="ENTER"
        actionPrimaryColor="primary"
        actionSecomdaryColor="secondary"
      />
    </GridItem>
  );
}
