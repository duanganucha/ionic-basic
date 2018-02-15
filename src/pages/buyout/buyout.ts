import { HomePage } from './../home/home';

import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector:'page-buyout',
    templateUrl: 'buyout.html'
})

export class Buyout {
    productData : {name:string,quantity:number}
    
    constructor(private navParams:NavParams,private navCtl:NavController){

        this.productData = this.navParams.data;
    }

    onBuy(){
        this.navCtl.popToRoot();
    }
    
    
}