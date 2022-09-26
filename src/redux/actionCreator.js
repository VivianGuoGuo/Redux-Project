const setFile = (payload) => {
    return {
      type: "SET_FILE",
      payload
    };
  };
  
  const setData = (payload) => {
    return {
      type: "SET_DATA",
      payload
    };
  };
  
  export const actions = {
    setFile,
    setData
  };
  