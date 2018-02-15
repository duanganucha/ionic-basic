import { NavParams, NavController } from 'ionic-angular';
import {Component,OnInit} from "@angular/core";

@Component({
    selector:'page-user',
    templateUrl:'user.html'
})

export class UserPage implements OnInit{

    name:string;

    constructor(private navParams:NavParams,private navCtl:NavController){}

    ngOnInit(){
        this.name = this.navParams.get('userName');
        console.log(this.name)
    }

    goToback(){
        // this.navCtl.pop();
        this.navCtl.popToRoot();
    }
}