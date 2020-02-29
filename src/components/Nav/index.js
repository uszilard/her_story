import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EmailIcon from "@material-ui/icons/Folder";

import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    left: 0,
    right: 0,
    position: "fixed",
    bottom: 0,
    zIndex: 1,
    boxShadow: "20px 0px 20px rgba(182, 182, 182, 0.75)",
    backgroundColor: '#FFBABE'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to='/'>
        <BottomNavigationAction showLabel='true' label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to='/events'>
        <BottomNavigationAction showLabel='true' label="Events" icon={<PeopleIcon />} />
      </Link>
      <Link to='/books'>
        <BottomNavigationAction showLabel='true' label="Books" icon={<MenuBookIcon />} />
      </Link>
      <Link to='/newsletter'>
        <BottomNavigationAction showLabel='true' label="NewsLetter" icon={<EmailIcon />} />
      </Link>
    </BottomNavigation>
  );
}
