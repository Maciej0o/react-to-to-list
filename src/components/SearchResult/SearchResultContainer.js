import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsForList} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsForList(state, searchString),
  };
};



export default connect(mapStateToProps)(SearchResult);