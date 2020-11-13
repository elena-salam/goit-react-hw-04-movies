import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ActorInfo = styled.li`
list-style: none;
width: 265px;
padding-right: 20px;
`

const ActorName = styled.p`
font-size: 18px;
margin-bottom: 5px;
margin-top: 5px;
`
const ActorRole = styled.p`
margin-top: 5px;
margin-bottom: 25px;
font-size: 18px;
font-weight: 600;
`

const CastListItem = ({actorImage, actorName, characterName}) => {
    
    const actorImgRef = `https://image.tmdb.org/t/p/w200${actorImage}`;
    const defaultImage = 'https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=200';
    return(
        <ActorInfo>
            <img src={actorImgRef.includes('null') ? defaultImage : actorImgRef}
            alt ={actorName} />
            <ActorName >Name: {actorName}</ActorName>
            <ActorRole>Character: {characterName}</ActorRole>

        </ActorInfo>
    );
    
};

CastListItem.propTypes={
    actorImage: PropTypes.string,
    actorName: PropTypes.string,
    characterName: PropTypes.string
}

export default CastListItem;