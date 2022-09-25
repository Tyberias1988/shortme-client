import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import './App.css';
import './components/style.css'
import TextField from './components/TextField';
import Table from './components/Table';
import { IShortmeData } from './types/shortme';
import ShortmeService from './services/ShortmeService';

const App: React.FC = () => {

const [link, setLink] = useState<string>("");
const [data, setData] = useState<IShortmeData[]>([]);

const ShowTable = () => {
  const [showTable, setShowTable] = React.useState(false)
  const onClick = () => setShowTable(true)
  return (
    <div className='App'>
      <br />
      <input type="submit" value="Links anzeigen" onClick={onClick} className="showAllLinksButton"/>
      { showTable ? <RenderTable /> : null }
    </div>
  )
}

const RenderTable = () => (
    <Table data={data} />
)

const fetchData = async () => {
  const response = await ShortmeService.getAll();
  response.data.forEach(function(element, index){
    let formatedDate = moment(element.createdAt).format('DD.MM.YYYY - HH:mm:ss');
    response.data[index].createdAt = formatedDate;
  });
  setData(response.data);
}

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if(link){
    //setLinks([...links, {link}])
    setLink("");
  }
};

useEffect(() => {
  fetchData();
}, []);

  return <div className='App'>
    <span className='header'>ShortMe</span>
    <TextField link={link} setLink={setLink} handleAdd={handleAdd}/>
    <ShowTable />
  </div>
}

export default App;
