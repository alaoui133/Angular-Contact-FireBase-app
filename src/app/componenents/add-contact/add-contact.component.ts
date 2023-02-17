import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = {
    name: '',
    telephone: null
  };
  statusContact: boolean = false;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

//to create new contact
  newContact(contact: any) {

    this.contactService.createContact(contact);
    this.contact = {
      name: '',
      telephone: null
    };
    this.statusContact = false;

  }


}
