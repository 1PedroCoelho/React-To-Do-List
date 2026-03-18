import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragments from './components/Fragments';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent/>
      <AnotherComponent/>
      <Images/>
      <Hooks/>
      <List/>
      <RenderCond x={10} y={20}/>
      <Fragments/>
      <Container>
        <h1>Esse é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
