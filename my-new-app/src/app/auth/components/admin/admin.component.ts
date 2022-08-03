import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardReduxService } from 'src/app/redux/services/card-redux.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  form: FormGroup;
  date = new Date;

  constructor(private cardReduxService: CardReduxService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      discription: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      linkVideo: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    console.log ('Hello');
  }

  onSubmit() {
    this.cardReduxService.getCard(
      { title: this.form.value.title,
      discription: this.form.value.discription,
      linkImage: this.form.value.img,
      linkVideo: this.form.value.linkVideo,
        creationDate: this.date
    }
      );
  }

}
