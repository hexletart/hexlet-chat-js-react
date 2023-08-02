import { io } from 'socket.io-client';

// import WEB_SOCKET_HOST from '../utilities/config';

export default class SocketClient {
  constructor() {
    this.socket = io();
    this.connected = false;
  }

  setConnected() {
    this.connected = true;
  }

  setDisconnected() {
    this.connected = false;
  }

  offAll() {
    this.socket.removeAllListeners();
  }

  connect() {
    if (!this.connected) {
      this.socket.connect();
    }
  }

  disconnect() {
    if (this.connected) {
      this.socket.disconnect();
    }
  }

  emit(eventName, data) {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  }

  on(eventName, func) {
    if (this.socket) {
      this.socket.on(eventName, func);
    }
  }
}
