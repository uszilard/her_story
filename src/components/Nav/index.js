import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosFemale } from 'react-icons/io';
import { MdEventAvailable } from 'react-icons/md';
import { GiBlackBook } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';

const pink = '#CC0E70'
const navFontSize = '23px'

const useStyles = makeStyles({
  root: {
    left: 0,
    right: 0,
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    boxShadow: '20px 4px 20px #333',
    backgroundColor: 'white',
    paddingTop: '10px'

  }
});
const StyledLink = styled(Link)`
text-decoration: none;
`
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
      <StyledLink to='/'>
        <BottomNavigationAction showLabel='true' label='Home' icon={<IoIosFemale color={pink} size={navFontSize} />} />
      </StyledLink>
      <StyledLink to='/events'>
        <BottomNavigationAction showLabel='true' label='Events' icon={<MdEventAvailable color={pink} size={navFontSize} />} />
      </StyledLink>
      <StyledLink to='/books'>
        <BottomNavigationAction showLabel='true' label='Books' icon={<GiBlackBook color={pink} size={navFontSize} />} />
      </StyledLink>
      <StyledLink to='/newsletter'>
        <BottomNavigationAction showLabel='true' label='NewsLetter' icon={<AiOutlineMail color={pink} size={navFontSize} />} />
      </StyledLink>
    </BottomNavigation>
  );
}
