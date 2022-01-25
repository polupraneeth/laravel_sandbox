import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as subscriberActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function subscriberAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('api/v1/subscribers', transformRequest(params))
        .then(res => {
          dispatch(subscriberActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}

export function subscriberUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`api/v1/subscribers/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(subscriberActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}

export function subscriberRemoveRequest(id) {
  return dispatch => {
    Http.delete(`api/v1/subscribers/${id}`)
      .then(() => {
        dispatch(subscriberActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function subscriberListRequest(params) {

  let { pageNumber = 1, url = 'api/v1/subscribers' } = params

  return dispatch => {
    if (pageNumber > 1) {
      url = url + `?page=${pageNumber}`
    }

    Http.get(url)
      .then((res) => {
        dispatch(subscriberActions.list(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function subscriberEditRequest(id) {
  return dispatch => {
    Http.get(`api/v1/subscribers/${id}`)
      .then((res) => {
        dispatch(subscriberActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function subscriberFetchRequest(slug) {
  return dispatch => {
    Http.get(`api/v1/subscribers/public/${slug}`)
      .then((res) => {
        dispatch(subscriberActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
