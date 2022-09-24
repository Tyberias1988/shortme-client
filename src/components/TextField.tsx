import React, { useRef, useState } from 'react'
import { IShortmeData } from '../types/shortme';
import "./style.css"

interface Props{
    link : string;
    setLink: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const TextField: React.FC<Props> = ({ link, setLink, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    //const [links, setLinks] = useState<IShortmeData[]>([])

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
    </form>
  )
}

export default TextField