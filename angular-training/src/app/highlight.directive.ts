import { HostBinding } from "@angular/core";
import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
selector:'[appHighlight]'
})
export class HighlightDirective{
 // Color: string = 'red';
 @HostBinding('class.active')isHovering:boolean | undefined
@HostListener('mouseover') mouseover(){
   console.log('mouse over');
   this.renderer.setStyle(this.el.nativeElement,'background','black');
   this.isHovering=true;
}
@HostListener('mouseleave') mouseleave(){
  this.isHovering=false;

  console.log('mouse left');
  this.renderer.setStyle(this.el.nativeElement,'background','pink');

}

  constructor(private el:ElementRef , private renderer:Renderer2){
  // el.nativeElement.style.backgroundColor = this.Color;
  /* setInterval( (x:any) => {
     this.ChangeColor()
   } , 1000)*/
   //console.log(this.Color);


}
  /*ChangeColor (){
    this.el.nativeElement.style.backgroundColor = this.Color ;
    console.log(1);
  }*/

}

