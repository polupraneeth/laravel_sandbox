/* ============
 * Actions for the subscriber module
 * ============
 *
 * The actions that are available on the
 * subscriber module.
 */

import {
  SUBSCRIBER_ADD,
  SUBSCRIBER_UPDATE,
  SUBSCRIBER_REMOVE,
  SUBSCRIBER_LIST,
} from './action-types';

export function add(payload) {
  return {
    type: SUBSCRIBER_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: SUBSCRIBER_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: SUBSCRIBER_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: SUBSCRIBER_LIST,
    payload
  }
}