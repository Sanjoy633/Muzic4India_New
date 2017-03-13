import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController,ModalController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactForm: FormGroup;
  data = {}
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController,public modalctrl:ModalController, public formBuilder: FormBuilder) {

    this.contactForm=formBuilder.group({
        name: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: [''],
        phone: [''],
        subject: [''],
        message: ['']
       
    });
 

  }

 save(){
 
    this.submitAttempt = true;
 
    if(!this.contactForm.valid){
        return;
    } 
    
    else {
     this.testLoveCalculation();
     this.submitAttempt = false;
        console.log("success!")
        console.log(this.contactForm.value);
   
    }
 
}
  testLoveCalculation(){
   
 console.log("Ready to begin the test");
 /*let modal=this.modalctrl.create(LoveTestPage,this.contactForm.value);
 modal.onDidDismiss(data => {
   this.data={};
    // console.log(data);
   });
 modal.present();*/


  }

}