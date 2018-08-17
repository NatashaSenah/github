import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { GithubFormComponent } from './github-form/github-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    StrikethroughDirective,
    GithubFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
