import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
  root: {
    left: 0,
    right: 0,
    backgroundColor: 'pink',
    position: 'fixed',
    bottom: 0
  },
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
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Events" icon={<PeopleIcon />} />
      <BottomNavigationAction label="Books" icon={<MenuBookIcon />} />
      <BottomNavigationAction label="NewsLetter" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}

