/**
 * Created by Julien Durand on 11/04/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-directory',
    template: `<h1>name : {{name}} ; taille : {{taille}}</h1>
                <div>
                    <ul>
                        <li *ngFor="let file of files">
                        {{file.name}}  {{file.taille}}
                        </li>
                    </ul>
                </div>
`
})


export class Directory {
    name : string;
    taille : number;
    files : File[];

    constructor(name: string){
        this.name = name;
    }


}