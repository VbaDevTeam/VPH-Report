import {createSlice} from '@reduxjs/toolkit';



export const slice = createSlice({
    name: 'conrepo',
    initialState: {
        dataAcquisition: {},
        dataChannels: {},
    },
    reducers: {
        setDataAcquisition: (state, action) => {

            state.dataAcquisition = action.payload;
        },
        setDataChannels: (state, action) => {
            state.dataChannels = action.payload;
        },
    },
});

export const {  setDataAcquisition,
                setDataChannels
             } = slice.actions;
export const selectDataAcq = state => state.conrepo.dataAcquisition;
export const selectDataChs = state => state.conrepo.dataChannels;

export default slice.reducer;
