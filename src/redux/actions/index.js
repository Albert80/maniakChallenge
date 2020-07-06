import urls from "../../config/urls";

export const FETCH_ROUTES_REQUEST = "FETCH_ROUTES_REQUEST",
      FETCH_ROUTES_SUCCESS = "FETCH_ROUTES_SUCCESS",
      FETCH_ROUTES_FAILURE = "FETCH_ROUTES_FAILURE",
      FETCH_PAGE_REQUEST = "FETCH_PAGE_REQUEST",
      FETCH_PAGE_SUCCESS = "FETCH_PAGE_SUCCESS",
      FETCH_PAGE_FAILURE = "FETCH_PAGE_FAILURE";

export function fetchRoutesRequest() {
  return {
    type: FETCH_ROUTES_REQUEST
  }
};

export function fetchRoutesSuccess(routesItems) {
  return {
    type: FETCH_ROUTES_SUCCESS,
    payload: routesItems
  }
};

export function fetchRoutesFailure() {
  return {
    type: FETCH_ROUTES_FAILURE
  }
};

export function fetchRoutes() {
  return dispatch => {
    // dispatch({ type: FETCH_ROUTES_REQUEST });
    dispatch(fetchRoutesRequest());
    return fetch(urls.menu)
            .then(res => res.json())
            .then(data => {
              // dispatch({type: FETCH_ROUTES_SUCCESS, payload: data.menu.items});
              dispatch(fetchRoutesSuccess(data.menu.items));
            })
            .catch(error => {
              // dispatch({ type: FETCH_ROUTES_FAILURE });
              dispatch(fetchRoutesFailure());
            })
  }
};

export function fetchPageRequest() {
  return {
    type: FETCH_PAGE_REQUEST
  }
};

export function fetchPageSuccess(pageContent) {
  return {
    type: FETCH_PAGE_SUCCESS,
    payload: pageContent
  }
}

export function fetchPageFailure() {
  return {
    type: FETCH_PAGE_FAILURE
  }
}

export function fetchPage(url) {
  const validator = {
    "page-1": urls.page1,
    "page-2": urls.page2,
  };
  return dispatch => {
    dispatch(fetchPageRequest());
    return fetch(validator[`${url}`])
            .then(res => res.json())
            .then( data => {
              dispatch(fetchPageSuccess(data));
            })
            .catch( err => {
              dispatch(fetchPageFailure());
            })
  }
};