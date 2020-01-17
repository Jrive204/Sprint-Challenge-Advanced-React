import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles/HeaderStyles";
import { useDarkMode } from "./hooks/useDarkMode";
import { PurpleSwitch } from "./styles/HeaderStyles";

export default function Header() {
  const [toggleMode] = useDarkMode("dark", false);
  const [state, setState] = useState({
    checkedA: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}></Typography>

          <PurpleSwitch
            value='checkedA'
            onClick={handleChange("checkedA")}
            checked={state.checkedA}
            onChange={toggleMode}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
