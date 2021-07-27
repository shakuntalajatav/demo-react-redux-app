import { userConstants } from '../_constants';

export function ticker(state = {}, action) {
    switch (action.type) {
      case userConstants.GETALL_REQUEST:
        return { status: true };
      case userConstants.GETTICKET_SUCCESS:
        return {
            items: action.ticker
        };
      case userConstants.GETTICKET_FAILURE:
        return {};
      default:
        return state
    }
  }

  export function book(state = {}, action) {
    switch (action.type) {
      case userConstants.GETBOOK_REQUEST:
        return { status: true };
      case userConstants.GETBOOK_SUCCESS:
        return {
            items: action.book
        };
      case userConstants.GETBOOK_FAILURE:
        return {};
      default:
        return state
    }
  }