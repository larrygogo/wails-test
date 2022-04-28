import styled from "styled-components";
import {HTMLAttributes} from "react";
import React from "react";

const SearchInput = styled.input`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  height: 32px;
  border: none;
  padding: 6px 16px;
`



const Search = (props: HTMLAttributes<HTMLInputElement>) => {
    return <SearchInput {...props} data-wails-no-drag />
}

export default Search;