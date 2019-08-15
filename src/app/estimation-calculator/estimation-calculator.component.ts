import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Datasheet } from './datasheet';
import { EmailService } from '../_service/email.service';

@Component({
  selector: 'app-estimation-calculator',
  templateUrl: './estimation-calculator.component.html',
  styleUrls: ['./estimation-calculator.component.scss']
})
export class EstimationCalculatorComponent implements OnInit {
  domestic: FormGroup;
  industrial: FormGroup;
  hotel: FormGroup;
  general: FormGroup;
  dataset = new Datasheet();
  showSentEmail = true;

  domesticData = {
    'kw': 0,
    'units': 0,
    'price': 0
  };



  industryData = {
    'kw': 0,
    'units': 0,
    'price': 0
  }; 
  hotelData = {
    'kw': 0,
    'units': 0,
    'price': 0
  }; 
  generalData = {
    'kw': 0,
    'units': 0,
    'price': 0
  };

  emailModalDomestic: FormGroup;
  emailModalIndustry: FormGroup;
  emailModalHotel: FormGroup;
  emailModalGeneral:FormGroup;


  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
  }

  ngOnInit() {



    this.domestic = this.formBuilder.group({
      slider: [1],
      battery: [false],
      insured: [false]
    });
    this.domestic.valueChanges.subscribe(res => { 
      this.domesticData.kw = this.dataset.dataset[res.slider].kw;
      this.domesticData.units = this.dataset.dataset[res.slider].units;
      this.domesticData.price = this.dataset.dataset[res.slider].domestic;

    })

    this.industrial = this.formBuilder.group({
      slider: [1],
      battery: [false],
      insured: [false]
    });

    this.industrial.valueChanges.subscribe(res => {
      this.industryData.kw = this.dataset.dataset[res.slider].kw;
      this.industryData.units = this.dataset.dataset[res.slider].units;
      this.industryData.price = this.dataset.dataset[res.slider].industry;

    })

    this.hotel = this.formBuilder.group({
      slider: [1],
      battery: [false],
      insured: [false]
    });
    this.hotel.valueChanges.subscribe(res => {
      this.hotelData.kw = this.dataset.dataset[res.slider].kw;
      this.hotelData.units = this.dataset.dataset[res.slider].units;
      this.hotelData.price = this.dataset.dataset[res.slider].hotel;

    })

    this.general = this.formBuilder.group({
      slider: [1],
      battery: [false],
      insured: [false]
    });
    this.general.valueChanges.subscribe(res => {

      this.generalData.kw = this.dataset.dataset[res.slider].kw;
      this.generalData.units = this.dataset.dataset[res.slider].units;
      this.generalData.price = Number( this.dataset.dataset[res.slider].general );

    })



    this.emailModalDomestic = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      telephone:['',[Validators.required]],
      address:['',[Validators.required]],
      comment: ['']
    });
    this.emailModalDomestic.valueChanges.subscribe(res => {
      // console.log(res);
    })

    this.emailModalIndustry = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      telephone:['',[Validators.required]],
      address:['',[Validators.required]],
      comment: ['']
    });
    this.emailModalIndustry.valueChanges.subscribe(res => {
      // console.log(res);
    })

    this.emailModalHotel = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      telephone:['',[Validators.required]],
      address:['',[Validators.required]],
      comment: ['']
    });
    this.emailModalHotel.valueChanges.subscribe(res => {
      // console.log(res);
    })

    this.emailModalGeneral = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      telephone:['',[Validators.required]],
      address:['',[Validators.required]],
      comment: ['']
    });
    this.emailModalGeneral.valueChanges.subscribe(res => {
      // console.log(res);
    })


  }

  domesticEmail() {
    let body = this.emailModalDomestic.get('comment').value + '\n' + JSON.stringify(this.domestic.value);
    this.emailService.sendEmail(this.emailModalDomestic.get('email').value, "Estimation Calculator Domestic", body, this.emailModalDomestic.get('name').value, JSON.stringify(this.domestic.value),this.emailModalDomestic.get('telephone').value,this.emailModalDomestic.get('address').value).subscribe(res => {
      //  alert(JSON.stringify(this.domestic.value));
    })

  }
  industryEmail() {
    let body = this.emailModalIndustry.get('comment').value + '\n' + JSON.stringify(this.industrial.value);
    this.emailService.sendEmail(this.emailModalIndustry.get('email').value, "Estimation Calculator Industrial ", body, this.emailModalIndustry.get('name').value, JSON.stringify(this.industrial.value),this.emailModalIndustry.get('telephone').value,this.emailModalIndustry.get('address').value).subscribe(res => {
      // alert(JSON.stringify(this.industrial.value));
    })

  }
  hotelEmail() {
    let body = this.emailModalHotel.get('comment').value + '\n' + JSON.stringify(this.hotel.value);
    this.emailService.sendEmail(this.emailModalHotel.get('email').value, "Estimation Calculator Hotel ", body, this.emailModalHotel.get('name').value, JSON.stringify(this.hotel.value),this.emailModalHotel.get('telephone').value,this.emailModalHotel.get('address').value).subscribe(res => {
      // alert(JSON.stringify(this.hotel.value));
    })
  }
  generalEmail() {
    let body = this.emailModalGeneral.get('comment').value + '\n' + JSON.stringify(this.general.value);
    this.emailService.sendEmail(this.emailModalGeneral.get('email').value, "Estimation Calculator General ", body, this.emailModalGeneral.get('name').value, JSON.stringify(this.general.value),this.emailModalGeneral.get('telephone').value,this.emailModalGeneral.get('address').value).subscribe(res => {
      // alert(JSON.stringify(this.general.value));
    })
  }



  get emailModalDomesticName() {
    return this.emailModalDomestic.get('name')
  }
  get emailModalDomesticEmail() {
    return this.emailModalDomestic.get('email')
  }



  get emailModalIndustryName() {
    return this.emailModalIndustry.get('name')
  }
  get emailModalIndustryEmail() {
    return this.emailModalIndustry.get('email')
  }




  get emailModalHotelName() {
    return this.emailModalHotel.get('name')
  }
  get emailModalHotelEmail() {
    return this.emailModalHotel.get('email')
  }

  get emailModalGeneralName() {
    return this.emailModalDomestic.get('name')
  }
  get emailModalGeneralEmail() {
    return this.emailModalDomestic.get('email')
  }







}
