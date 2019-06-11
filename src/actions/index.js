export const selectLibrary = (libraryId) => { // action creator
  return {
    type: 'select_library', //object with type is an action
    payload: libraryId
  };
};
