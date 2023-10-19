import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import home from './pages/home/home';
import DETAIL from './pages/detail/DETAIL';
import landing from './pages/landing/landing';
import create from './pages/create/create';
import about from './pages/about/about';
import Navbar from './Componets/Navbar/Navbar';


function App() {
  return (
<div className="App">
  <BrowserRouter>
    <Route
      render={({ location }) => {

        if (location.pathname !== '/landing') {
          return <Navbar />;
        }
        return null; 
      }}
    />
    <Switch>
      <Route path="/landing" component={landing} />
      <Route path="/home" component={home} />
      <Route path="/detail/:id" component={DETAIL} />
      <Route path="/create" component={create} />
      <Route path="/about" component={about} />
    </Switch>
  </BrowserRouter>
</div>
  );
}

export default App;
