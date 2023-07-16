import { io } from 'socket.io-client';
import WEB_SOCKET_HOST from '../utilities/config.js';

export default class SocketClient {
  constructor() {
    this.socket = io(
      WEB_SOCKET_HOST,
      { autoConnect: false },
    );
    this.connected = false;
  }

  setConnected() {
    console.log('from setConnected');
    this.connected = true;
  }

  setDisconnected() {
    console.log('from setDisconnected');
    this.connected = false;
  }

  offAll() {
    this.socket.removeAllListeners();
  }

  connect() {
    console.log('connected state from connect', this.connected);
    if (!this.connected) {
      console.log('from connect');
      this.socket.connect();
    }
  }

  disconnect() {
    if (this.connected) {
      console.log('from disconnect');
      this.socket.disconnect();
    }
  }

  emit(eventName, data) {
    if (this.socket) {
      console.log('from emit, event name =>', eventName);
      this.socket.emit(eventName, data);
    }
  }

  on(eventName, func) {
    if (this.socket) {
      console.log('from on, event name =>', eventName);
      this.socket.on(eventName, func);
    }
  }
}
