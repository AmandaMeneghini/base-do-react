import './App.css'
import { useState } from 'react'
import { Buttons } from './components/Buttons/index';
import { StyledText } from './components/StyledText/index';

function App() {
  const [isColored, setIsColored] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);

  const toggleColor = () => setIsColored(!isColored);
  const toggleUppercase = () => setIsUppercase(!isUppercase);

  return (
    <>
      <StyledText isColored={isColored} isUppercase={isUppercase} />
      <Buttons toggleColor={toggleColor} toggleUppercase={toggleUppercase} isColored={isColored} isUppercase={isUppercase} />
    </>
  )
}

export default App
