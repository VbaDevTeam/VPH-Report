import {createSlice} from '@reduxjs/toolkit';

const setDataGeneric = (stateData, data) =>{
    console.table("pippo", data);
    console.log("SetDataGeneric");
    const tmpData = Object.assign({}, stateData);
    let element = stateData.data.find(el => el.id === data.id);
    let idxEl = stateData.data.indexOf(element);
    tmpData.data[idxEl] = data;
    return tmpData;
};


export const slice = createSlice({
    name: 'conrepo',
    initialState: {
        dataAcquisition: {},
        dataChannels: {},
        currentElement: {}
    },
    reducers: {
        setInitDataAcquisition: (state, action) => {

            state.dataAcquisition = action.payload;
        },
        setNewDataAcquisition: (state, action) => {
            //let data = action.payload;
            //let lData = state.dataAcquisition;
            //const tmpData = Object.assign({}, lData);
            //let element = lData.data.find(el => el.id === data.id);
            //let idxEl = lData.data.indexOf(element);
            //tmpData.data[idxEl] = data;
            //state.dataAcquisition = tmpData;
            state.dataAcquisition = setDataGeneric(state.dataAcquisition, action.payload)

        },
        setInitDataChannels: (state, action) => {
            state.dataChannels = action.payload;
        },
        setNewDataChannels: (state, action) => {
            state.dataChannels = setDataGeneric(state.dataChannels, action.payload)
        },
        setCurrentElement: (state, action) => {
            state.currentElement = action.payload;
        },
        setNewCurrentElement: (state, action) => {
            state.currentElement = action.payload;
        },
    },
});

export const {  setInitDataAcquisition,
                setNewDataAcquisition,
                setNewDataChannels,
                setInitDataChannels
             } = slice.actions;
export const selectDataAcq = state => state.conrepo.dataAcquisition;
export const selectDataChs = state => state.conrepo.dataChannels;

export default slice.reducer;
