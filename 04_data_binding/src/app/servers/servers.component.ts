import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName = 'Test server';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus =
      'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName(event: KeyboardEvent): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUserName(): void {
    this.userName = '';
  }
}
