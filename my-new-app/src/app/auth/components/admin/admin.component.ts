import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, this.checkForLength, this.checkForLong ]),
      description: new FormControl('', [Validators.nullValidator, this.checkDescriptionLong]),
      img: new FormControl('', [Validators.required, this.checkForImg]),
      linkVideo: new FormControl('', [Validators.required, this.checkForVideo])
    })
  }
  checkForLength(control:FormControl) {
    if (control.value.length <= 3 && control.value.length >= 1){
      return {
        'lengthShortError': true,
      };
    }
    return null;
  }
  checkForLong(control:FormControl) {
    if (control.value.length > 20){
      return {
        'lengthLongError': true,
      };
    }
    return null;
  }
  checkDescriptionLong(control:FormControl) {
    if (control.value.length > 255){
      return {
        'lengthLongError': true,
      };
    }
    return null;
  }
  checkForImg(control:FormControl) {
    const checkImg:string = control.value.split('').slice(-3);
      if (!('svg' === checkImg  || checkImg === 'png' || checkImg === 'jpg' )) {
      return {
        'imgError': true,
      }
    }
    return null;
  }
  checkForVideo(control:FormControl) {
    const checkVideo:string = control.value.split('').slice(-3);
    if (!(checkVideo === 'avi' || checkVideo === 'mkv' || checkVideo === 'mov' || checkVideo === 'flv')) {
      return {
        videoError: true,
      }
    }
    return null;
  }
}
