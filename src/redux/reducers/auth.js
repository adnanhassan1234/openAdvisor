const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    userId: null,
    accessToken: null,
    refreshToken: null,
}
const auth = createSlice({
    name: "auth", initialState, reducers: {
        authSuccess: (state, { payload: { accessToken, refreshToken, userId } }) => {
            state.accessToken = accessToken
            state.refreshToken = refreshToken
            state.userId = userId
        }
    }
})

export default auth.reducer

export const { authSuccess } = auth.actions