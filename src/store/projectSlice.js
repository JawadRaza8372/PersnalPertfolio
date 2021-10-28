import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      if (action.payload.projects === null) {
        state.projects = null;
      } else {
        state.projects = action.payload.projects;
      }
    },
  },
});

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;
