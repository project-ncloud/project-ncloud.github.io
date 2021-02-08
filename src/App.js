import './style.scss';
import Welcome from './components/welcome'
import Topbar from './components/topbar';
import FileManager from './components/FileManager'


import { useState } from 'react'
import About from './components/about';

function App() {

  const [state, setState] = useState({
    showMainScreen : true,
    showCreditScreen : false,
    showHelpScreen : false,
    showAboutScreen : false,
  })

  function openAbout(){
    setState({
      showMainScreen : false,
      showCreditScreen : false,
      showHelpScreen : false,
      showAboutScreen : true,
    })
  }
  function openCredit(){
    setState({
      showMainScreen : false,
      showCreditScreen : true,
      showHelpScreen : false,
      showAboutScreen : false,
    })
  }
  function openHelp(){
    setState({
      showMainScreen : false,
      showCreditScreen : false,
      showHelpScreen : true,
      showAboutScreen : false,
    })
  }
  function openMain(){
    setState({
      showMainScreen : true,
      showCreditScreen : false,
      showHelpScreen : false,
      showAboutScreen : false,
    })
  }

  return (
    <>
      {state.showMainScreen ? <Welcome /> : null}
      {state.showAboutScreen ? <About /> : null}
      {state.showHelpScreen ? <FileManager /> : null}
      <Topbar 
        openAbout={()=>openAbout()} 
        openCredit={()=>openCredit()} 
        openHelp={()=>openHelp()} 
        openMain={()=>openMain()} 
        showNIco={state.showMainScreen}
        showAIco={state.showAboutScreen}
        showCIco={state.showCreditScreen}
        showHIco={state.showHelpScreen}
      />


    </>
  );
}

export default App;
