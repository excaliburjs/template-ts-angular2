import { Component, OnInit } from '@angular/core';
import * as ex from 'excalibur';

@Component({
  selector: 'my-app',
  template: '<canvas id="game"></canvas>'
})
export class AppComponent implements OnInit { 
    constructor(){

    }
    ngOnInit(){
        var engine = new ex.Engine({
            canvasElementId: "game",
            width: 100,
            height: 100            
        });
        engine.start();
    }    

}
