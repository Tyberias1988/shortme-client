import http from "../http-common";
import { IShortmeData } from "../types/shortme";

const getAll = async () => {
  return await http.get<Array<IShortmeData>>("/links");
};

const getRedirected = async (code: string) => {
  try{
    return await http.post(`/${code}`)
  } catch(err){
    console.log(err)
  }
   
};

const create = async (longURL: string) => {
  try{
    return await http.put<IShortmeData[]>("/links/" + longURL);
  } catch (err){
    console.log(err)
  }
  
};

const ShortmeService = {
  getAll,
  getRedirected,
  create,
};

export default ShortmeService;
