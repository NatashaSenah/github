import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from'../github-http/github-request.service'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
// link="'https://api.github.com/users/daneden?access_token=' +q"

constructor() { }

ngOnInit() {
  }

}
