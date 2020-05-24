const initialState = {
  isModalOpen: false,
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'TOOGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      }
    default:
      return state;
  }
}

export default modalReducer;
