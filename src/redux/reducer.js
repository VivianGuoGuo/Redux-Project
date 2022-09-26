const initialState = {
    file: null,
    csvData: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FILE":
        return {
          ...state,
          file: action.payload
        };
  
      case "SET_DATA":
        return {
          ...state,
          csvData: [...action.payload]
        };
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;