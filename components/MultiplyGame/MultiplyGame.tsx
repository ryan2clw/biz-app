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
import { toggle } from "../../redux/gameDataSlice";
import { useDispatch, useSelector } from "react-redux";

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

function GridItem({ classes, sm, background, children, color, fontSize, fontFamily, minHeight } : any) {

    return (
        <Grid item xs={12} sm={sm} style={{minHeight, background: '#dfdfdf', border: '1px solid black'}} className={classes?.item}>
            <Paper className={classes?.paper} style={{height:'100%', background, color, fontSize, fontFamily}}>
                {children}
            </Paper>
        </Grid>
    );
}

function PlayArea({classes, boardValue, classesTwo}:any){

    return (
        <Grid container spacing={1} style={{height:'100%'}}>
            <GridItem classes={classesTwo} sm={12} text='Row 1'>
                7
            </GridItem>
            <GridItem classes={classes} sm={12} text='Row 2' >
                x 4
            </GridItem>
            <GridItem classes={classes} sm={12} text='Row 3' >
                28
            </GridItem>
            <GridItem classes={classes} minHeight={118} sm={12} text='Row 4' background="black" color="white" fontSize={80} fontFamily="Chalkduster">
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


export default function MultiplyGame(props: any) {

    const {background, topContent} = props;
    const classes = useStyles();
    const classesTwo = useStylesTwo();
    const [answer, setAnswer] = useState("");
    const [isGameOn, setGameState] = useState(false);
    const dispatch = useDispatch();
    const { isStarted } = useSelector((state:any) => state.gameData);

    return (
        <Main style={{padding:15}} background={background}>
            <div className={`${styling.multiplyGame}`}>
                {!isStarted && <div style={{textAlign:'center'}}>
                    {documentToReactComponents(topContent)}
                </div>
                }
            <div style={{textAlign: 'center'}}>
                {!isStarted && <Button variant="contained" color="secondary" onClick={()=>{
                    setGameState(true);
                    dispatch(toggle());
                }}>BEGIN</Button>}
            </div>
            {isStarted &&
            <Grid container spacing={1}>
                <GridItem classes={classes} sm={12} min='10vh' text='Timer'>
                    <div style={{display:'flex', flexDirection: 'row', justifyContent:"space-around"}}>
                        <div>
                            <div >
                                {/* style={{marginLeft: 15}} */}
                            Timer: 
                            </div>
                            <Timer />
                        </div>
                        <div >
                            <div >
                                {/* style={{marginLeft: 15}} */}
                            Score: 
                            </div>
                            <div style={{marginLeft: 6}} >
                                0/0
                            </div>
                        </div>
                    </div>
                </GridItem>
                <GridItem classes={classes} sm={6} min='60vh' text='Play area'>
                    <PlayArea classes={`${classes}`} boardValue={answer} classesTwo={classesTwo}/>
                </GridItem>
                <GridItem classes={classes} sm={6} min='20vh' text='Number area' >
                    <BasicButtonGroup one="1" two="2" three="3" four="4" five="5" actionPrimaryColor="secondary" 
                    actionSecomdaryColor="primary" actionThirdColor="primary" actionFourthColor="secondary" actionFifthColor="primary" onClick={(e:any)=>{if(answer.length < 3)setAnswer(answer + e.target.innerText)}}/>
                    <br />
                    <BasicButtonGroup one="6" two="7" three="8" four="9" five="0" actionPrimaryColor="primary" actionSecomdaryColor="secondary" actionThirdColor="secondary" actionFourthColor="primary" actionFifthColor="secondary" onClick={(e:any)=>{
                            if(answer.length < 3)setAnswer(answer + e.target.innerText)}
                        } />
                    <br />
                    <BasicButtonGroup onClick={(e:any)=>{e.target.innerText==="CLEAR"?
                            setAnswer("") : alert(`SUBMITTED: ${answer}`)}
                        } one='CLEAR' two="ENTER" actionPrimaryColor="primary" actionSecomdaryColor="secondary" />
                </GridItem>
            </Grid>}
            </div>
        </Main>
    );
}