import React from "react";
import { StyledPrimaryButton } from "../Styles/styles";
import styled from 'styled-components'

const StyledVideoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;    
    box-sizing: border-box;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.main};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.tertiary};
    padding: 10px;
`
const StyledVideoName= styled.h5`
    color: ${props => props.theme.colors.main};
    margin: 0;
    padding: 10px 0px; 
`

const StyledInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    flex-grow: 1000;
    flex-shrink: 0;
    flex-basis: 300px;    
`

const StyledDownloadButton = styled(StyledPrimaryButton)` 
    min-width: min-content;
    flex-grow: 1;
`

interface props {
    data: {
        id: {
            kind: string,
            videId: string
        },
        etag?: any,
        kind: any,
        snippet: {
            channelId: string,
            channelTitle: string,
            description: string,
            liveBroadcastContent: any,
            publishTime: string,
            publishedAt: string,
            title: string,
            thumbnails: {
                default: { url: string, width: any, height: any },
                high: any,
                medium: any               
            }
        }
    }
}

const Video: React.FC<props> = ({data}) => {
    return (
        <StyledVideoContainer>
            <StyledInfoContainer>
                <img src={data.snippet.thumbnails.default.url} alt="" />            
                <StyledVideoName>{data.snippet.title}</StyledVideoName>
            </StyledInfoContainer>
            <StyledDownloadButton>Download</StyledDownloadButton>
        </StyledVideoContainer>)
}

export default Video