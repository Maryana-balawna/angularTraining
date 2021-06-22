import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'DefulteImage'})

export class DefulteImage implements PipeTransform{
  transform(imageUrl:string , placeholder:string,forceHttps:Boolean=false){
    console.log('in pipe',imageUrl,placeholder);
    let image= imageUrl?imageUrl:placeholder;
    console.log('before',image)
    if(forceHttps){
      if(image.indexOf('https')===-1){
      image=image.replace('http','https')
      }
    }
    console.log('after',image)
return image;
  }

}


