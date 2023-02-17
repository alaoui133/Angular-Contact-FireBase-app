import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  statusContact: boolean = false;
  myContact: any;
  contacts: any;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactService.getContacts()?.subscribe(contact => {
      this.contacts = contact;
      console.log(this.contacts);
    });
  }

  editContact(contact: Contact) {
    this.statusContact = !this.statusContact;
    this.myContact = contact;

  }

  updateContact(contact: any) {
    this.contactService.updateContact(contact);
    this.statusContact = false;
  }

  deleteContact(contact: any) {
    if (confirm("are you sure to delete this contact")) {
      this.contactService.destroyContact(contact);
    } else {
      this.statusContact = false;
    }

  }

}
