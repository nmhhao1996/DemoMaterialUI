import React, { useState } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles({
  inputItemWrapper: {
    marginBottom: 10,
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function App() {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setEmailError(false);
  }

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!email) {
      // false, null, '', 0
      setEmailError(true);
      return;
    }
    setResult("email:" + email + ", pass: " + password);
  }

  return (
    <Container maxWidth="sm">
      <h3>LOGIN</h3>
      <Grid direction="column">
        <Grid item className={classes.inputItemWrapper}>
          <TextField
            error={emailError}
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            onChange={onEmailChange}
            value={email}
            helperText={emailError && "DM nhap email cho tao"}
          />
        </Grid>
        <Grid item className={classes.inputItemWrapper}>
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={onPasswordChange}
            value={password}
          />
        </Grid>
        <Grid item>
          <Button onClick={onSubmit} className={classes.root}>
            Submit
          </Button>
        </Grid>
        <Grid item>
          <div>{result}</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
