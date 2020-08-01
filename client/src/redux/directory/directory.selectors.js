import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.slider
);

export const selectSlidersForPreview = createSelector(
  [selectDirectorySections],
  (slider) => (slider ? Object.keys(slider).map((key) => slider[key]) : [])
);
