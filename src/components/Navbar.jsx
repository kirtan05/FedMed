import React from 'react';
import { HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem } from 'baseui/header-navigation';
import { Button } from 'baseui/button';
import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';
import { Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, setIsDarkMode }) => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>FedMed</StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        {/* <Checkbox
          checked={isDarkMode}
          checkmarkType={STYLE_TYPE.toggle_round}
          onChange={() => setIsDarkMode(!isDarkMode)}
        >
          Dark Mode
        </Checkbox> */}
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button kind="minimal">Dashboard</Button>
        </Link>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link to="/submit" style={{ textDecoration: 'none' }}>
          <Button kind="minimal">Submit Model</Button>
        </Link>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link to="/rewards" style={{ textDecoration: 'none' }}>
          <Button kind="minimal">Rewards</Button>
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
);

export default Navbar;
