import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  card: {
    minWidth: 100
  },
  bullet: {
    display: "inline-block",
    margin: "0 5px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 50
  },
  pos: {
    marginBottom: 5
  }
});

export default function PlayerCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className='card'>
      <Paper className={classes.root}>
        <Card className={classes.card}>
          <CardContent key={props.id}>
            <Typography className={classes.title} variant="h1" component="h1">
              Name:{props.name}
            </Typography>
            <Typography variant="h5" component="h2">
              Home Country:{props.country}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Google Searches:{props.searches}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
