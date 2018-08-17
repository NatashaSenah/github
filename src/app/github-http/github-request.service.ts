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

  constructor( private http:HttpClient){
    this.github=new Github("","")
 }


 githubApi(){

    interface ApiResponse{
        avatar_url:string;
        repos_url:string;

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
            this.github.avatar_url=response.avatar_url;
            this.github.repos_url=response.repos_url;
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
