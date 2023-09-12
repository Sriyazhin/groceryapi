
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculations from './Calculations';
import Createuser from './Createuser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Calculations />}></Route>
        <Route path='/createhere' element={<Createuser />}></Route>
        {/* <Route path='/createhere' element={<Forcreate />}></Route> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
