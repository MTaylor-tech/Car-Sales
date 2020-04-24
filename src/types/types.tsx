export interface Feature {id: number, name: string, price: number};
export interface Car {price: number, name: string, image: string, features: Array<Feature>}
export interface CarReducer {additionalPrice: number, car: Car, additionalFeatures: Array<Feature>};
export interface CarState {additionalPrice: number, car: Car, additionalFeatures: Array<Feature>, carReducer: CarReducer };
export interface Action {type: string, payload:Feature}


//import {Feature, Car, CarReducer, CarState, Action} from '../types/types';
