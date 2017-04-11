/**
 * Created by Julien Durand on 11/04/2017.
 */

@Component({
    selector: 'my-file',
    template: `<h1>Hello {{name}}</h1>`
})


export class File { name = 'file'; }