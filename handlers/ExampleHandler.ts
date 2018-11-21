import { IWebSocketHandler, Socket } from "unturned2-api";

/**
 * This is a server side websocket handler. The OnConnect method is called on every new connection. 
 * You can listen to events of a client with socket.on and send using socket.emit
 */
export default class LogFileHandler implements IWebSocketHandler {
    constructor(){
        
    }
    
    OnConnect(socket: Socket){
        socket.on("pingsocket",function(){
            socket.emit("pongsocket","from my handler");
            socket.broadcast.emit("pongsocket","from my handler");
        });
    }
}