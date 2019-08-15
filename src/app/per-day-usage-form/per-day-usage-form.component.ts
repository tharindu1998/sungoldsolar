import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EmailService } from '../_service/email.service';

@Component({
  selector: 'app-per-day-usage-form',
  templateUrl: './per-day-usage-form.component.html',
  styleUrls: ['./per-day-usage-form.component.scss']
})
export class PerDayUsageFormComponent implements OnInit {
  perdayusageform: FormGroup;
  submitted = false;
  items = [];
  perDayClass: any;
  id = 0;

  emailModal: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }


  ngOnInit() {
    this.perdayusageform = this.formBuilder.group({
      count: ['', Validators.required],
      watt: ['', Validators.required],
      hrs: ['', Validators.required],
      item: ['', Validators.required],
      id: [this.id]

    });
    this.perdayusageform.valueChanges.subscribe(res => {
      // console.log(res);
      // this.perDayClass = res;
    })

    this.emailModal = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      comment: [''],
      telephone:['',[Validators.required]],
      address:['',[Validators.required]],
    });
    this.emailModal.valueChanges.subscribe(res => {
      // console.log(res);
    })


  }

  addItem() {
    this.id++;
    this.perdayusageform.setValue({
      'id': this.id,
      'count': this.perdayusageform.get('count').value,
      'item': this.perdayusageform.get('item').value,
      'watt': this.perdayusageform.get('watt').value,
      'hrs': this.perdayusageform.get('hrs').value
    }
    );
    this.items.push(this.perdayusageform.value);
    // console.log(this.items)

    // alert(JSON.stringify(this.items));

  }
  deleteItem(event, item) {
    // console.log("Checking passed item: ", item);
    for (let i = 0; i < this.items.length; i++) {
      if (item === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
  }

  perdayEmail() {
    let body = this.emailModal.get('comment').value + '\n' + JSON.stringify(this.items);
    this.emailService.sendEmail(this.emailModal.get('email').value, "From Per Day Calculator", body, this.emailModal.get('name').value, JSON.stringify(this.items),this.emailModal.get('telephone').value,this.emailModal.get('address').value).subscribe(res => {
      // console.log(JSON.stringify(res));
    })

  }

  get name() {
    return this.emailModal.get('name')
  }
  get email() {
    return this.emailModal.get('email')
  }
  get comment() {
    return this.emailModal.get('comment')
  }

}
