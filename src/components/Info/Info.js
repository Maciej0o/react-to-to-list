import React from 'react';
import Container from '../Container/Container';
import Hero from  '../Hero/Hero.js';
import {info} from '../../data/dataStore.js';


const Info = () => (
  <Container>
    <Hero titleText={info.title} imageSrc={info.image}/>
    <p>{info.contents}</p>
  </Container>
);

export default Info;