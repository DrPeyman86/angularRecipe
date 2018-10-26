import { Component, OnInit } from '@angular/core';

//selector options:
//you can target normal html tags with custom attributes instead of custom html tags
//you do this by wrapping the selector with square brackets
//to select by class, add a period before the custom selector
@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',//this targets a class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Test';
  userNamePopulated = false;
  userName = '';
  servers=['Testserver','Testserver 2'];


  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);//add the serverName typed inside the input box to the servers array defined above
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    //console.log(event);
    /*in typescript, if you want to explicity tell ts that the target element is a certain type of an element
    use following syntax*/
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  userNameLen(event: any) {
    if((<HTMLInputElement>event.target).value.length>0) {
      this.userNamePopulated = true;
    }
  }

  resetUserName(){
    this.userName = '';
    this.userNamePopulated = false;
  }

}
