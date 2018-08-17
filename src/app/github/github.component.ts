import { Component, OnInit } from '@angular/core';
import { GithubRequestService} from'../github-http/github-request.service'
import { Github } from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers: [GithubRequestService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github:Github

constructor(private gitHubService:GithubRequestService) {}

ngOnInit()  {


  this.gitHubService.githubApi();
  this.github = gitHubService
  console.log(github)

}
}
