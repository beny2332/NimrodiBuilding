//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import roles from "../data/roles.json"

interface RoleState {
  currentRole: string
}

const initialState: RoleState = {
  currentRole: roles[0]
}

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      const roleIndex = action.payload
      if (roleIndex >= 0 && roleIndex < roles.length) {
        state.currentRole = roles[roleIndex]
    }
    return state
    },
  },
})

export const { setRole } = roleSlice.actions
export default roleSlice.reducer
