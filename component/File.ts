/**
 * Created by Julien Durand on 11/04/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-file',
    template: `<h1>name : {{name}} ; taille : {{taille}}</h1>`
})


export class File {
    name : string;
    taille : number;
    constructor(name:string,taille:number){
        this.name = '';
        this.taille =taille;
    }

}