import './App.css';
import PaginaReport from "./Pages/gestReport";
import {DataContextProvider} from "./Context";

function App() {
  return (
    <DataContextProvider>
        <div className="App">
            <PaginaReport/>
        </div>
    </DataContextProvider>
  );
}

export default App;
