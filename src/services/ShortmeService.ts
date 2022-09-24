import http from "../http-common";
import { IShortmeData } from "../types/shortme";

const getAll = () => {
    return http.get<Array<IShortmeData>>("/links");
};

const getRedirected = (code: string) => {
    return http.get<IShortmeData>(`/${code}`);
  };

/*const create = (data: IShortmeData) => {
    return http.post<IShortmeData>("/links/", data);
  };
*/

const create = (longURL: string) => {
    return http.put<IShortmeData>("/links/", longURL);
  };

const ShortmeService = {
    getAll,
    getRedirected,
    create,
  };
  
  export default ShortmeService;