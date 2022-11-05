import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Ipropertybase } from 'src/app/models/ipropertybase';

@Component({
  selector: 'app-AddProperty',
  templateUrl: './AddProperty.component.html',
  styleUrls: ['./AddProperty.component.css']
})
export class AddPropertyComponent implements OnInit {
 // @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  addPropertyForm: FormGroup

  propertyTypes: Array<string> = ['House','Apartment','Duplex']
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished']


  propertyView : Ipropertybase = {
    Id : null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType:null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        PType: [null, Validators.required],
        Name: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required]
      })

    })
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Congrats, form submitted');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
      this.formTabs.tabs[tabId].active = true;
    }
  }


