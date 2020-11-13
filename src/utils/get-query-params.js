import queryString from 'query-string';
// чтобы преобразовать пропс location.search ("?query=sun") 
// из строки в объект, используем библиотеку: query-string 

export default function GetQueryParams (string){
    return  queryString.parse(string);
}