import React, {useState} from 'react';
export const DataContext = React.createContext({});
export const DataContextProvider = ({ children }) => {
    let fakeDataChannel = {
        title: ' -> Selezionare quali dati avere all\'interno del Report',
        data : [
            { id: 1, Name:'PV_PMT', Value:false, IsBoolean:"True", Description:'Pressione Monte'},
            { id: 2, Name:'PV_PVL', Value:false, IsBoolean:"True", Description:'Pressione Valle'},
            { id: 3, Name:'PV_TCL', Value:false, IsBoolean:"True", Description:'Temperatura Cella'},
            { id: 4, Name:'PV_TFL', Value:false, IsBoolean:"True", Description:'Temperatura Fluido'},
            { id: 5, Name:'PV_QFL', Value:false, IsBoolean:"True", Description:'Portata Fluido'},
        ]
    };

    let fakeDataAcq = {
        title: ' -> Inserire "ogni quanto" e "per quanto" acquisire i dati',
        data : [
            { id: 1, Name:'SP_AI', Value:0, IsBoolean:"False",Description:'Intervallo Acquisizione [Sec]'},
            { id: 2, Name:'SP_AD', Value:0, IsBoolean:"False",Description:'Durata Acquisizione [Sec]'},
        ]
    };

    const [dataChannel, setDataChannel] = useState(fakeDataChannel);
    const [dataAcquisition, setDataAcquisition] = useState(fakeDataAcq);

    return (
        <DataContext.Provider  value={{ val1: [dataChannel, setDataChannel], val2: [dataAcquisition, setDataAcquisition] }}>
            {children}
        </DataContext.Provider>
    );
};