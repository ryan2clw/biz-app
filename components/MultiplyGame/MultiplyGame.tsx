import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styling from "./MultiplyGame.module.scss";
import Main from "../Main";
import Timer from "../Timer/Timer";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
    height: '100%'
  }
}));

function GridItem({ classes, sm, min, text, children } : any) {
    const hasRows = text === 'Play area';
  return (
    <Grid item xs={12} sm={sm} style={{minHeight: min, background: '#dfdfdf', border: '1px solid black'}}>
      <Paper className={classes.paper}>
        {hasRows && <Grid container spacing={1} style={{height:'100%'}}>
            <GridItem classes={classes} sm={12} text='Row 1' />
            <GridItem classes={classes} sm={12} text='Row 2' />
            <GridItem classes={classes} sm={12} text='Row 3' />
            <GridItem classes={classes} sm={12} text='Row 4' />
        </Grid>}
        {children}
      </Paper>
    </Grid>
  );
}
export default function AutoGrid(props: any) {

    const {background, topContent} = props;
    const classes = useStyles();

    return (
        <Main style={{padding:15}} background={background}>
            <div className={`${styling.multiplyGame}`}>
            <div style={{textAlign:'center'}}>{documentToReactComponents(topContent)}</div>
            <Grid container spacing={1}>
                <GridItem classes={classes} sm={12} min='10vh' text='Timer'>
                   <Timer />
                </GridItem>
                <GridItem classes={classes} sm={8} min='60vh' text='Play area' />
                <GridItem classes={classes} sm={4} min='20vh' text='Number area' />
            </Grid>
            </div>
        </Main>
    );
}