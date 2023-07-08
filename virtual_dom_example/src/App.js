import { useCallback, useState } from 'react';
import './App.css';
import DemoComponent from './Demo/DemoComponent';
import Button from './UI/Button/Button';

function App() {
  const [showParagraph,setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(()=>{
    if(!allowToggle)
      return;
    setShowParagraph(showParagraph => !showParagraph);
  },[allowToggle]); 

  const allowToggleHandler = ()=>{
    setAllowToggle(allowToggle=>!allowToggle);
  }

  console.log("app evaluated");
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <DemoComponent show={showParagraph}></DemoComponent>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <br/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
