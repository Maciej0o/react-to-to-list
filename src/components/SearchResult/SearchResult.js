import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';

const SearchResult = ({cards}) => {
  return(
    <Container>
      <section className={styles.component}>
        {cards.map(cardData => (
          <div key={cardData.id} className={styles.wrapper}>
            <Card key={cardData.id}{...cardData} />
          </div>
        ))}
      </section>
    </Container>
  
  );
};

SearchResult.propTypes = {
  cards: PropTypes.array,
};
  
export default SearchResult;