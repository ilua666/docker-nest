import { Db, Record } from './pseudodb';
import { Injectable } from '@nestjs/common';

const db = new Db();
@Injectable()
export class AppService {
  getHello() {
    return db;
  }
  addToDb(ip:string, userAgent:string){
    db.log.push(new Record(ip, userAgent)) 
  }
}
