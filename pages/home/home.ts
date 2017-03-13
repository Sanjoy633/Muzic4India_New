import { Component,ViewChild } from '@angular/core';

import { NavController,NavParams,Slides,Nav  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild('mySliderFirst') slider: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams,public nav: Nav) {}
  

  onSlideChanged() {
    let previousIndex = this.slider.getPreviousIndex();
    let currentIndex = this.slider.getActiveIndex();
    console.log('Previous index is', previousIndex, 'Current index is', currentIndex);
  }

  onSlideMove(ev: any) {
    console.log('Slide moving', ev);
  }

  goToPrevSlide() {
    this.slider.slidePrev();
  }
 

  goToNextSlide() {
    this.slider.slideNext();
  }

  goToSlide(index: number) {
    this.slider.slideTo(index);
  }

  getIndex() {
    let index = this.slider.getActiveIndex();
    console.log('Current Index is', index);
  }

  getLength() {
    let length = this.slider.length();
    console.log('Current Length is', length);
  }
  slides = [
    {
      title: "Welcome to Muzic4India!",
      description: " A unique concept of finding new talent in Hindi &amp;    Bengali singing and nurturing them to place before the world audience. .",
      image: "assets/img/1st.jpg",
    },
    {
      title: "Welcome to Muzic4India!",
      description: " A unique concept of finding new talent in Hindi &amp;    Bengali singing and nurturing them to place before the world audience. .",
      image: "assets/img/2nd.jpg",
    },
    
];

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}