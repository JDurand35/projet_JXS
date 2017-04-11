/**
 * Created by Johann Durand on 11/04/2017.
 */
import { File } from 'component/File';
import { Directory } from 'component/Directory';

var f1 = new File('file1', 1);
var f2 = new File('file2', 2);
var d = new Directory('dir' , f1.taille+f2.taille, (new Array(f1, f2)));