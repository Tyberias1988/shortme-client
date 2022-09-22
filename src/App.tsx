import React, { useState } from 'react';
import './App.css';
import TextField from './components/TextField';
import { Link } from './models';

const App: React.FC = () => {

const [link, setLink] = useState<string>("");
const [links, setLinks] = useState<Link[]>([])

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if(link){
    setLinks([...links, {link}])
    setLink("");
  }
};

  return <div className='App'>
    <span className='header'>ShortMe</span>
    <TextField link={link} setLink={setLink} handleAdd={handleAdd}/>
    {
    links.map(
      (l) => (
      <li>{l.link}</li>
      )
      )
    }
  </div>
}

export default App;
