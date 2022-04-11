import React, {useState} from "react";
import { StyledPrimaryButton } from "../Styles/styles";
import { useAppDispatch } from "../State/hooks";
import { fetchVideos, fetchVideoById } from "../List/listSlice";
import styled from "styled-components";

const StyledSearchContainer = styled.div`     
`

const StyledHeading = styled.h2`
    color: ${props => props.theme.colors.main}; 
    text-align: center;
    text-transform: uppercase;
    margin: 20px;
`

const StyledSearchBar = styled.div`
    display:flex;
    gap: 10px;    
`

const StyledInput = styled.input`
    flex-grow: 1;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.main};
    outline: none;
`

const Search: React.FC = () => {
    const [inputValue, setInput] = useState<string>('')
    const dispatch = useAppDispatch()
    
    const handleSearch = async () => {
        const youtubeCheckString = 'https://www.youtube.com/watch?'
        if (inputValue.includes(youtubeCheckString)) {

            const urlString: string = inputValue
            const url = new URL(urlString)
            const id = url.searchParams.get('v') 
            if (id) {
                dispatch(fetchVideoById(id))
            }
        } else {
            dispatch(fetchVideos(inputValue))
        }
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <StyledSearchContainer>
            <StyledHeading>Paste url or search</StyledHeading>
            <StyledSearchBar>
                <StyledInput value={inputValue} onChange={handleInput}></StyledInput>
                <StyledPrimaryButton onClick={handleSearch}>GO</StyledPrimaryButton>                
            </StyledSearchBar>            
        </StyledSearchContainer>
    )
}

export default Search