import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function Characters(props) {
    const { characterNames } = props

    
    const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    `;

    const StyledChar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    background-color: black;
    border: 10px blue;
    margin: 8px;
    padding: 8px;
    border-style: solid;
    border-color: pink;
    border-radius: 25px;
    `
    


    return(
        <>
        <StyledContainer>
            {characterNames.map(p=> (
                <>
                <StyledChar>
                <h3>{p.name}</h3>
                <div>Birthyear: {p.birth_year} </div>
                <div>Mass: {p.mass}KGs</div>
                <div>Gender: {p.gender}</div>
                <div>Hair Color: {p.hair_color}</div>
                <div>Skin Color: {p.skin_color}</div>
                <div>Eye Color: {p.eye_color}</div>
                </StyledChar>
                </>
            ))}
           
        </StyledContainer>
        </>
    )
}