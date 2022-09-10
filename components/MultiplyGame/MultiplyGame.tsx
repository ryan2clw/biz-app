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

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    height: '100%',
  }
}));

function GridItem({ classes, sm, min, background, children, color, fontSize, fontFamily } : any) {

    return (
        <Grid item xs={12} sm={sm} style={{minHeight: min, background: '#dfdfdf', border: '1px solid black'}}>
            <Paper className={classes?.paper} style={{height:'100%', background, color, fontSize, fontFamily}}>
                {children}
            </Paper>
        </Grid>
    );
}

function PlayArea({classes, boardValue}:any){

    return (
        <Grid container spacing={1} style={{height:'100%'}}>
            <GridItem classes={classes} sm={12} text='Row 1'>
            </GridItem>
            <GridItem classes={classes} sm={12} text='Row 2' />
            <GridItem classes={classes} sm={12} text='Row 3' />
            <GridItem classes={classes} sm={12} text='Row 4' background="black" color="white" fontSize={80} fontFamily="Chalkduster">
                {boardValue}
            </GridItem>
        </Grid>
    )
}

export function BasicButtonGroup({one, two, three, four, five,
     actionPrimaryColor, actionSecomdaryColor, actionFourthColor, actionThirdColor, actionFifthColor}:any) {
    return (
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button size="large" color={actionSecomdaryColor}>{one}</Button>
        <Button size="large" color={actionPrimaryColor}>{two}</Button>
        {three && <Button size="large" color={actionThirdColor}>{three}</Button>}
        {four && <Button size="large" color={actionFourthColor}>{four}</Button>}
        {five && <Button size="large" color={actionFifthColor}>{five}</Button>}
      </ButtonGroup>
    );
  }


export default function MultiplyGame(props: any) {

    const {background, topContent} = props;
    const classes = useStyles();
    const [state, setState] = useState("0");

    return (
        <Main style={{padding:15}} background={background}>
            <div className={`${styling.multiplyGame}`}>
            <div style={{textAlign:'center'}}>{documentToReactComponents(topContent)}</div>
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
                <GridItem classes={classes} sm={7} min='60vh' text='Play area'>
                    <PlayArea classes={classes} boardValue={state}/>
                </GridItem>
                <GridItem classes={classes} sm={5} min='20vh' text='Number area' >
                    <BasicButtonGroup one="1" two="2" three="3" four="4" five="5" actionPrimaryColor="secondary" 
                    actionSecomdaryColor="primary" actionThirdColor="primary" actionFourthColor="secondary" actionFifthColor="primary"/>
                    <br />
                    <BasicButtonGroup one="6" two="7" three="8" four="9" five="0" actionPrimaryColor="primary" actionSecomdaryColor="secondary" actionThirdColor="secondary" actionFourthColor="primary" actionFifthColor="secondary" />
                    <br />
                    {/* <BasicButtonGroup one="7" two="8" three="9" actionPrimaryColor="secondary" actionSecomdaryColor="primary" actionLastColor="primary"/>
                    <br/> */}
                    <BasicButtonGroup one='CLEAR' two="ENTER" actionPrimaryColor="primary" actionSecomdaryColor="secondary" />
                </GridItem>
            </Grid>
            </div>
        </Main>
    );
}