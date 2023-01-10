import {BrowserRouter} from 'react-router-dom'
import Page from './Pages/Page';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
