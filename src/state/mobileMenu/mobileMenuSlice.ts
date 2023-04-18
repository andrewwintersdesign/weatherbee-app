import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../state/store";

export interface MenuState {
  open: boolean;
}

const initialState: MenuState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { toggle, open, close } = menuSlice.actions;

export const selectMenuOpen = (state: RootState) => state.menu.open;

export default menuSlice.reducer;
