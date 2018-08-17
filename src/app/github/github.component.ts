import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from'../github-http/github-request.service'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers: [HttpClient],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {


constructor() {}

ngOnInit()  {}
}
