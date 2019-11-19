import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.p`
    display: flex;
    justify-content: center;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
`

function Dogs() {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(res => {
            console.log(res);
            setDogs(res.data.message.spaniel);
        })
        .catch(err => {
            console.log("There was an error", err)
        })
    },[])
    return (
        <div>
            <Title>Types of Spaniel</Title>
            {dogs.map((item, index) => {
                return <List key={index}>{item}</List>;
            })}
        </div>
    )
}

export default Dogs;