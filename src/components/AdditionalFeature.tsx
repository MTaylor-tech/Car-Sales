import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/carActions';
import {CarState} from '../types/types';

const AdditionalFeature = (props: any): JSX.Element => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
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
  {addFeature}
)(AdditionalFeature);
