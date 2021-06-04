import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Header = ({ setSearchBarInput }) => {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <Container>
      <FirstOptions>
        <Option>
          <img
            src='https://s3.eu-west-1.amazonaws.com/eduflow-production/course-thumbnails/225872189638408.png'
            alt='Logo'
          />
        </Option>

        <Option>
          <a href='/'>Home</a>
        </Option>
        <Option>
          <a href='/'>Tv Shows</a>
        </Option>
        <Option>
          <a href='/'>Movies</a>
        </Option>
        <Option>
          <a href='/'>Recently Added</a>
        </Option>
        <Option>
          <a href='/'>My List</a>
        </Option>
      </FirstOptions>
      <SecondOptions>
        <Option>
          <Input
            searchBar={searchBar}
            onKeyUp={(e) => {
              setSearchBarInput(e.target.value);
            }}
          />
          <SearchIcon onClick={() => setSearchBar(!searchBar)} />
        </Option>
        <Option>
          <a href='/'>KIDS</a>
        </Option>
        <Option>
          <NotificationsIcon />
        </Option>
        <Option>
          <AccountBoxIcon />
          <ArrowDropDownIcon />
        </Option>
      </SecondOptions>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: black;
`;
const FirstOptions = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding: 5px;
  border-radius: 10px;
  outline: 0;
  border: 0;
  display: ${({ searchBar }) => (searchBar ? 'block' : 'none')};
`;
const SecondOptions = styled.div`
  display: flex;
  align-items: center;
`;
const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  a {
    text-decoration: none;
    color: white;
  }
  img {
    height: 60px;
  }
`;
