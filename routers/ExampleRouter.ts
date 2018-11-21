import { BaseRouter, Request, Response } from 'unturned2-api';
/**
 * This is a server side route registration. 
 * The router is automatically registered at /<root>/.
 * When the user is authenticated - req.user is set to the user profile.
 */
export default class TestRouter extends BaseRouter{
    constructor(){
        super();
        this.root = "example";
        this.router.get('/ping' ,function (req: Request, res: Response) {
            if(req.user){
               return res.send("hello "+req.user.userName);
            }else{
               return res.send("i dont know you");
            }
        });
    }
}