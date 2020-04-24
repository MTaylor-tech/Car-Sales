import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/carActions';
import {CarState} from '../types/types';

const AddedFeature = (props: any): JSX.Element => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state: CarState) => {
  return {
    additionalPrice: state.carReducer.additionalPrice,
    car: state.carReducer.car,
    additionalFeatures: state.carReducer.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {removeFeature}
)(AddedFeature);
