import {  Plugin,   WebSocketConnection,  WebSocketServer,  Router,  View,  Request,  Response } from "unturned2-panel"
import * as path from "path"

export default class ExamplePlugin implements Plugin {
    get name () { return "fr34kyn01535.ExamplePlugin"; }
    load() { console.log("Example plugin loaded"); }
    registerRoutes(router: Router) {
        router.get('/ping' ,function (req: Request, res: Response) {
            if(req.user){
               return res.send("hello "+req.user.userName);
            }else{
               return res.send("i dont know you");
            }
        });
    }
    getViews() : View[] {
        return [ new View("test", path.join(path.resolve(__dirname,"./Views/") ),"Test","gear") ];
    }
    handleWSConnected(socket: WebSocketConnection) {
        socket.on("pingsocket",function(){
            socket.emit("pongsocket","from my handler");
            WebSocketServer.broadcast("pungsocket","from brodacast handler");
        });
    }
}
