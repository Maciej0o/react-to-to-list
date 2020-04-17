import React from 'react';
import Container from '../Container/Container';
import Hero from  '../Hero/Hero.js';
import {faq} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} imageSrc={faq.image}/>
    <p>{faq.contents}</p>
  </Container>
);

export default FAQ;