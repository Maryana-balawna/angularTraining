import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-training';
 /* name:string ='angular';

  color:string ='pink';
  names:string[]=['a','b','c']
  constructor(){ }
  trackByFn(index: any){
    return index
  }*/
/*favariteColorControl= ();
favariteColor='';
name= ();*/
//grouping form
/*profileForm:FormGroup ;



constructor(private fb:FormBuilder){

this.profileForm=this.fb.group({

    firstName: '',
    lastName: '',
  address : this.fb.group({
    city: '',
    street: ''
  })

})*/

  //data flow//
  /*this.favariteColorControl.valueChanges.subscribe((data: any) => console.log(data));
  setTimeout(()=>{
  this.favariteColorControl.setValue('hola');
  },2000);
  setTimeout(()=>{
    this.favariteColor='hello '
  },6000);
this.name.valueChanges.subscribe((changes: any)=>console.log('changes is',(changes)))

*/
//}
/*updateName(){
  this.name.setValue('hOoOoOla')
}*/
/*onSubmit(){
  console.log(this.profileForm.value)
}*/
}
