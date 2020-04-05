import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }
  render() {
    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Card;
