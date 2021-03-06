export default {
  MAIN_TITLE: 'vue-admin',

  /**
   * UI component
   */
  // The Admin name in the Toolbar
  MAIN_TOOLBAR_TITLE: 'Vue Admin',
  // The user name in the Toolbar
  MAIN_TOOLBAR_USER_AVATAR_NAME: 'Juan',

  /**
   * Auth component
   */
  AUTH_CONTAINER_TITLE: 'Sign In',
  AUTH_LABEL_USERNAME: 'E-mail',
  AUTH_LABEL_PASSWORD: 'Password',
  AUTH_LABEL_SIGN_IN_BUTTON: 'Sign In',

  AUTH_ALERT_EMAIL_REQUIRED: 'E-mail is required',
  AUTH_ALERT_PASSWORD_REQUIRED: 'Password is required',
  AUTH_ALERT_INVALID_EMAIL: 'E-mail must be valid',

  /**
   * Snackbar
   */

  // Text
  AUTH_SNACKBAR_INVALID_USER_PASSWORD: 'The username or password is invalid',
  AUTH_SNACKBAR_LOGIN_SUCCESS: {
    with: ({ username }) => `Welcome ${username}.`,
  },

  SNACKBAR_CLOSE_TEXT: 'Close',

  // Success messages
  SNACKBAR_CREATE_ELEMENT_SUCCESS_TEXT: 'The element was created successfully',
  SNACKBAR_DELETE_ELEMENT_SUCCESS_TEXT: 'The element was deleted successfully',
  SNACKBAR_UPDATE_ELEMENT_SUCCESS_TEXT: 'The element was updated successfully',
  // Error messages
  SNACKBAR_CREATE_ELEMENT_ERROR_TEXT:
    'There was a connection error while trying to create the element',
  SNACKBAR_DELETE_ELEMENT_ERROR_TEXT:
    'There was a connection error while trying to delete the element',
  SNACKBAR_UPDATE_ELEMENT_ERROR_TEXT:
    'There was a connection error while trying to update the element',
  SNACKBAR_FETCH_LIST_ERROR_TEXT:
    'There was a connection error while retrieving the elements',
  SNACKBAR_FETCH_SINGLE_ERROR_TEXT:
    'There was a connection error while retrieving the element. Information may not be up to date.',

  // Colors
  SNACKBAR_PRIMARY_COLOR: 'primary',
  SNACKBAR_SECONDARY_COLOR: 'secondary',
  SNACKBAR_ACCENT_COLOR: 'accent',
  SNACKBAR_ERROR_COLOR: 'error',
  SNACKBAR_INFO_COLOR: 'info',
  SNACKBAR_SUCCESS_COLOR: 'success',
  SNACKBAR_WARNING_COLOR: 'warning',

  /**
   * Auth component
   */
  CUSTOM_AUTH_CONTAINER_TITLE: 'Sign In',
  CUSTOM_AUTH_LABEL_USERNAME: 'Username',
  CUSTOM_AUTH_LABEL_PASSWORD: 'Password',
  CUSTOM_AUTH_LABEL_SIGN_IN_BUTTON: 'Sign In',

  CUSTOM_AUTH_ALERT_USERNAME_REQUIRED: 'Username is required',
  CUSTOM_AUTH_ALERT_PASSWORD_REQUIRED: 'Password is required',
  CUSTOM_AUTH_ALERT_INVALID_EMAIL: 'E-mail is required',

  /**
   * Shared content inside List, Show, Create, Edit components
   */

  /**
   * Unauthorized component
   */
  UNAUTHORIZED_HEADER: 'You do not have permission to access this page.',
  UNAUTHORIZED_MESSAGE:
    'If you think you should be allowed to see this page, please contact the administrator.',

  // Any View Title (List, Show, Create, Edit)
  RESOURCE_VIEW_TITLE: {
    with: ({ resourceName }) => `${resourceName}`,
  },
  // Create action button
  RESOURCE_CREATE_BUTTON: 'mdi-plus-circle',

  // Edit action button
  RESOURCE_EDIT_BUTTON: 'mdi-pencil',

  // Delete action button
  RESOURCE_DELETE_BUTTON: 'mdi-delete',

  // Create Save button
  CREATE_SUBMIT_BUTTON: 'save',

  // Edit Save button
  EDIT_SUBMIT_BUTTON: 'save',

  /**
   * Other buttons
   */
  BUTTON_GO_BACK: 'back',
}
