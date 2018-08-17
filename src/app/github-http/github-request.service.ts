import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GithubRequestService {

  constructor() {
 }
 // githubRequest(){
 //
 //   interface ApiResponse{
 //     github:string;
 //        author:string,

    }
//     let promise =new Promise((resolve,reject)=>{
//         this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//       resolve()
// }
//
// }
// }
