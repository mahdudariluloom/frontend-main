import { Observable, from } from "rxjs"
import config from "../axios/axios.config"
import { AxiosResponse } from "axios"

export function fetchData<T>(pathname:string):Observable<AxiosResponse<T,any>>{
    return from(config.get<T>(pathname))
}
export function postData<T>(pathname:string, data:object):Observable<AxiosResponse<T,any>>{       
    return from(config.post<T>(pathname, data))

}