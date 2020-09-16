import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: any;
  constructor(private api: ApiService) {}
  chatMembers: any[] = [];

  setupSocketConnection() {
    const token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
    this.socket = io(environment.SOCKET_ENDPOINT, {
      query: {
        token,
      },
    });

    this.socket.on('connect', () => {
      this.socket.token = token;
    });
  }

  getSocket() {
    return this.socket;
  }

  getChatMembers() {
    this.api.getChatMembers().subscribe((data: any[]) => {
      if (data) {
        this.chatMembers = data[0];
      }
    });
  }

  getMembers() {
    return this.chatMembers;
  }
  clearChatMembers() {
    this.chatMembers = [];
  }
}
