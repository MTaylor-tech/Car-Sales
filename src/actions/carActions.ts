import {Feature} from '../types/types';

export const addFeature = (feature: Feature) => {
  return { type: "ADD_FEATURE", payload: feature };
}

export const removeFeature = (feature: Feature) => {
  return { type: "REMOVE_FEATURE", payload: feature };
};
