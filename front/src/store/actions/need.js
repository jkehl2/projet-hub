/**
 * @module need-actions
 * Configuration des actions sur l'entité Need
 */

// == LISTE TYPE D'ACTIONS MIDDLEWARE NEED
export const NEED_ADD = 'NEED_ADD';
export const NEED_DELETE = 'NEED_DELETE';
export const NEED_EDIT = 'NEED_EDIT';

// == ACTION CREATORS POUR MIDDLEWARE NEED
export const needAdd = () => ({
  type: NEED_ADD,
});
export const needDelete = (id) => ({
  type: NEED_DELETE,
  payload: { id },
});
export const needEdit = (id) => ({
  type: NEED_EDIT,
  payload: { id },
});
