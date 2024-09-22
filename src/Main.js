
import '../src/styles/main.scss';
import About from './components/About.jsx';
import Header from './components/Header.jsx';
import MainSectionTati from './components/MainSectionTati.jsx';

export default function App(){
  return(
    <div className='App'>
      <Header/> 
      <MainSectionTati/>
      <About/>
    </div>
  )
}