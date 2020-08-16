import ProductType from '../../../types/Product';

export enum ActionTypes {
  PRODUCT_LIST = 'PRODUCT_LIST',
}

type Action = {
  type: ActionTypes,
  products: ProductType[]
}

export const productListAction = (products: ProductType[]) => ({ type: ActionTypes.PRODUCT_LIST, products });

export const productListSelector = (state: any) => state.products;

export const productListReducer = (state= {}, action: Action) => {
  switch(action.type) {
    case ActionTypes.PRODUCT_LIST:
      return { ...state, products: action.products };
  }

  return state;
}