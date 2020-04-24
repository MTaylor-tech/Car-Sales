import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './actions/carActions';
import {CarState} from './types/types';

const App = (props: any): JSX.Element => {
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

const mapStateToProps = (state: CarState) => {
  // this is where you tell the store what you want access to from the state
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
