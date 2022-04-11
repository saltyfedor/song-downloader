import React from "react";
import Video from "./Video";
import { useAppSelector } from "../State/hooks";
import { RootState } from "../State/store";
import styled from "styled-components";

const StyledVideosContainer = styled.div`
   display: flex;
   flex-direction: column-reverse;
   gap: 15px;
   max-width: 1140px;
   width: 100%;
   box-sizing: border-box;
   margin: 20px 0px;
`

const List: React.FC = () => {
    const videos: [] = useAppSelector((state: RootState) => state.list.data)

    const getVideoELements = () => {
        const elements: JSX.Element[] = videos.map((item, index) => <Video key={index} data={item} />)
        return elements
    }

    return (
        <StyledVideosContainer>
            {getVideoELements()}
        </StyledVideosContainer>
    )
}

export default List