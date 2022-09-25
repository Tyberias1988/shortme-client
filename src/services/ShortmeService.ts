import http from "../http-common";
import { IShortmeData } from "../types/shortme";

const getAll = async () => {
  return await http.get<Array<IShortmeData>>("/links");
};

const getRedirected = async (code: string) => {
  return await http.get<IShortmeData>(`/${code}`);
};

const create = async (longURL: string) => {
  return await http.put<IShortmeData>("/links/", longURL);
};

const ShortmeService = {
  getAll,
  getRedirected,
  create,
};

export default ShortmeService;
