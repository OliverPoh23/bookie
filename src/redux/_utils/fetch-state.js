export const fetchState = (type, payload) => {
  const state = {
    loading: false,
    data: null,
    error: null
  };

  switch (type) {
    case 'initial':
      return state;
    case 'request':
      return {
        ...state,
        loading: true,
      };
    case 'success':
      return {
        ...state,
        loading: false,
        data: payload
      };
    case 'failure':
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
