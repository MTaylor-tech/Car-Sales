import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {Feature} from '../types/types';

const AdditionalFeatures = (props: any): JSX.Element => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item: Feature) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
