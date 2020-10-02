export class Db{
    me: string;
    constructor(){
        this.me = "app from Shibut98@gmail.com"
        this.log = new Array() as [Record];
    }
    log: [Record]
}

export class Record{
    ip: string;
    time: string;
    userAgent: string;
    constructor(ip: string, userAgent:string){
        this.ip = ip;
        this.userAgent = userAgent;
        this.time = new Date().toLocaleString();
    }
}