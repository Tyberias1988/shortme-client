import React, { useRef } from 'react'
import "./style.css"

interface Props{
    link : string;
    setLink: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const TextField: React.FC<Props> = ({ link, setLink, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}>
        <input 
        ref={inputRef}
        type="input" 
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder='Link hier einfügen' 
        className='inputBox' />
        <button className='inputShortenButton' type="submit">Kürzen</button>
        <button className='showAllLinksButton'>Link-Liste</button>
    </form>
  )
}

export default TextField