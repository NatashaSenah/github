import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Github } from '../github';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GithubRequestService {

  github:Github;

  constructor( private http:HttpClient) {
 }


 githubApi(){

    interface ApiResponse{
        public repos:number;
        public repos:string

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.github.
            console.log(response)

            resolve()
        },
        error=>{
                console.log(error)
            }
        )
    })

    return promise
  }
}
