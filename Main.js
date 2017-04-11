"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Johann Durand on 11/04/2017.
 */
var File_1 = require("component/File");
var Directory_1 = require("component/Directory");
var f1 = new File_1.File('file1', 1);
var f2 = new File_1.File('file2', 2);
var d = new Directory_1.Directory('dir', f1.taille + f2.taille, (new Array(f1, f2)));
