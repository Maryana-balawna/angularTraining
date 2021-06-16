import { HostListener } from '@angular/core';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRandomColors]'
})
export class RandomColorsDirective {
  possibleColor=[
    'darksalmon','hotpink','hightskyblue','goldenrod','peachpuff','orange','brown'
  ]
@HostBinding('style.color') color:string | undefined;
@HostBinding('style.border-color') borderColor:string | undefined;
@HostListener('keydown')setColor(){
//console.log(Math.floor(Math.random() * this.possibleColor.length))
const colorIndex=Math.floor(Math.random() * this.possibleColor.length);
this.color=this.borderColor=this.possibleColor[colorIndex];
}
  constructor() { }

}
