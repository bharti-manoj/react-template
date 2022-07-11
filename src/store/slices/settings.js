import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    app_name: 'React template with redux toolkit'
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState
})

export default settingsSlice.reducer
