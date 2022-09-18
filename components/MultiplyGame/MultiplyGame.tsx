import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styling from "./MultiplyGame.module.scss";
import Main from "../Main";
import Timer from "../Timer/Timer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addRound, toggle, reset } from "../../redux/gamePlaySlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    height: '100%',
  }
}));
const useStylesTwo = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      justifyContent: "center",
      color: theme.palette.text.secondary,
      height: '100%',
      paddingLeft: 33
    }
  }));

function GridItem({ classes, sm, background, children, color, fontSize, fontFamily, minHeight, width } : any) {

    return (
        <Grid item xs={12} sm={sm} style={{width, minHeight, background: '#dfdfdf', border: '1px solid black'}} className={classes?.item}>
            <Paper className={classes?.paper} style={{height:'100%', background, color, fontSize, fontFamily}}>
                {children}
            </Paper>
        </Grid>
    );
}
const randomIntFromInterval= (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function PlayArea({classes, boardValue, classesTwo, firstNumber, secondNumber , showAnswer}:any){

    const firstTimesSecond = firstNumber * secondNumber;

    return (
        <Grid container spacing={1} style={{height:'100%'}}>
            <GridItem classes={classesTwo} sm={12} text='Row 1'>
                {firstNumber}
            </GridItem>
            <GridItem classes={classes} sm={12} text='Row 2' >
                x {secondNumber}
            </GridItem>
            <GridItem classes={classes} sm={12} text='Row 3' minHeight={48} >
                {showAnswer && firstTimesSecond}
            </GridItem>
            <GridItem classes={classes} width={305} minHeight={118} sm={12} text='Row 4' background="black" color="white" fontSize={80} fontFamily="Chalkduster">
                {boardValue}
            </GridItem>
        </Grid>
    )
}

export function BasicButtonGroup({one, two, three, four, five, onClick,
     actionPrimaryColor, actionSecomdaryColor, actionFourthColor, actionThirdColor, actionFifthColor}:any) {
    return (
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button size="large" color={actionSecomdaryColor} onClick={onClick}>{one}</Button>
        <Button size="large" color={actionPrimaryColor} onClick={onClick}>{two}</Button>
        {three && <Button size="large" color={actionThirdColor} onClick={onClick}>{three}</Button>}
        {four && <Button size="large" color={actionFourthColor} onClick={onClick}>{four}</Button>}
        {five && <Button size="large" color={actionFifthColor} onClick={onClick}>{five}</Button>}
      </ButtonGroup>
    );
  }
  function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

export default function MultiplyGame(props: any) {

    const {background, topContent} = props;
    const classes = useStyles();
    const classesTwo = useStylesTwo();
    const [answer, setAnswer] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const dispatch = useDispatch();
    const { isStarted } = useSelector((state:any) => state.gamePlay);
    const [firstRando, setFirstRando] = useState(randomIntFromInterval(2,10));
    const [secondRando, setSecondRando] = useState(randomIntFromInterval(2,10));
    const {numberRight,totalQuestions} = useSelector((state:any) => state.gamePlay);

    return (
        <Main style={{padding:15}} background={background}>
            <div className={`${styling.multiplyGame}`}>
                {!isStarted && <div style={{textAlign:'center'}}>
                    {documentToReactComponents(topContent)}
                </div>
                }
            <div style={{textAlign: 'center'}}>
                {!isStarted && <Button variant="contained" color="secondary" onClick={()=>{
                    dispatch(toggle());
                    dispatch(reset());
                }}>BEGIN</Button>}
            </div>
            {isStarted &&
            <Grid container spacing={1}>
                <GridItem classes={classes} sm={12} min='10vh' text='Timer'>
                    <div style={{display:'flex', flexDirection: 'row', justifyContent:"space-around"}}>
                        <div>
                            <div >
                            Timer: 
                            </div>
                            <Timer />
                        </div>
                        <div >
                            <div >
                            Score: 
                            </div>
                            <div style={{marginLeft: 6}} >
                                {numberRight}/{totalQuestions}
                            </div>
                        </div>
                    </div>
                </GridItem>
                <GridItem classes={classes} sm={6} min='60vh' text='Play area'>
                    <PlayArea classes={`${classes}`} boardValue={answer} classesTwo={classesTwo} showAnswer={showSolution} firstNumber={firstRando} secondNumber={secondRando}  />
                </GridItem>
                <GridItem classes={classes} sm={6} min='20vh' text='Number area' >
                    <BasicButtonGroup one="1" two="2" three="3" four="4" five="5" actionPrimaryColor="secondary" 
                    actionSecomdaryColor="primary" actionThirdColor="primary" actionFourthColor="secondary" actionFifthColor="primary" onClick={(e:any)=>{if(answer.length < 3)setAnswer(answer + e.target.innerText)}}/>
                    <br />
                    <BasicButtonGroup one="6" two="7" three="8" four="9" five="0" actionPrimaryColor="primary" actionSecomdaryColor="secondary" actionThirdColor="secondary" actionFourthColor="primary" actionFifthColor="secondary" onClick={(e:any)=>{
                            if(answer.length < 3)setAnswer(answer + e.target.innerText)}
                        } />
                    <br />
                    <BasicButtonGroup onClick={(e:any)=>{
                        if(e.target.innerText==="CLEAR"){
                            setAnswer("")
                        }else{
                            dispatch(addRound({
                                firstNumber: firstRando,
                                secondNumber: secondRando,
                                answer: parseInt(answer)
                            }));
                            setShowSolution(true);
                            delay(1000).then(()=>{
                                setShowSolution(false);
                                setFirstRando(randomIntFromInterval(2,10));
                                setSecondRando(randomIntFromInterval(2,10));
                                setAnswer("");
                            })
                        }
                    }} one='CLEAR' two="ENTER" actionPrimaryColor="primary" actionSecomdaryColor="secondary" />
                </GridItem>
            </Grid>}
            </div>
        </Main>
    );
}