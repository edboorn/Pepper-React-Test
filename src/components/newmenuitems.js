import React from "react";
import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 275,
      flexgrow : 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
    paper : {
        padding : theme.spacing(2),
        textAlign  : 'center',
        colour: theme.palette.text.secondary,
    }
  }));

const Items = ({ items }) => {
const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map(item => (
          <Grid container spacing = {1}>
              <Grid item xs={3}>
              <Card>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
                {item.name}
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {item.description}
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
              </Grid>
          </Grid>

      ))}
    </div>
  );
};
export default Items;
