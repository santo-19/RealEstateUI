import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Ipropertybase } from 'src/app/models/ipropertybase';

@Component({
  selector: 'app-AddProperty',
  templateUrl: './AddProperty.component.html',
  styleUrls: ['./AddProperty.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
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
  constructor(private router: Router) { }


  ngOnInit() {

  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(Form : NgForm){
    console.log('Congrats, form submitted');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
      this.formTabs.tabs[tabId].active = true;
    }
  }


