import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './actions/carActions';

const App = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
      <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // this is where you tell the store what you want access to from the state
  console.log(state);

  return {
    additionalPrice: state.carReducer.additionalPrice,
    car: state.carReducer.car,
    additionalFeatures: state.carReducer.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  { removeFeature, addFeature }
)(App);
