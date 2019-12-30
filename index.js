"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unturned2_panel_1 = require("unturned2-panel");
const path = require("path");
class ExamplePlugin {
    get name() { return "fr34kyn01535.Example"; }
    load() {
        console.log("Example plugin loaded");
    }
    registerRoutes(router) {
        router.get('/ping', function (req, res) {
            if (req.user) {
                return res.send("hello " + req.user.userName);
            }
            else {
                return res.send("i dont know you");
            }
        });
    }
    getViews() {
        return [
            new unturned2_panel_1.View("test", path.join(path.resolve(__dirname, "./Views/")), "Test", "gear")
        ];
    }
    handleWSConnected(socket) {
        socket.on("pingsocket", function () {
            socket.emit("pongsocket", "from my handler");
            unturned2_panel_1.WebSocketServer.broadcast("pungsocket", "from brodacast handler");
        });
    }
}
exports.default = ExamplePlugin;
//# sourceMappingURL=index.js.map