import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Test server';
  userName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['Test Server 1', 'Test Server 2'];
  showDetails: boolean = false;
  countShowDetails: number = 0;
  logItems: number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName(event: KeyboardEvent): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUserName(): void {
    this.userName = '';
  }

  onShowDetails(): void {
    this.showDetails = !this.showDetails;
    this.countShowDetails++;
    this.logItems.push(this.countShowDetails);
  }
}
