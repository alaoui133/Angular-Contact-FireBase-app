import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore/";
import { map, Observable, observable } from 'rxjs';
import { Contact } from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDoc: AngularFirestoreDocument<Contact> | undefined;
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]> | undefined

  constructor(private afs: AngularFirestore) {
    //bring DataBase from FireStore
    this.contactsCollection = this.afs.collection('contacts');
    //snapshotChanges to bring the data including IDs
    this.contacts = this.contactsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getContacts() {
    return this.contacts;
  }

  createContact(contact: Contact) {
    this.afs.collection('contacts').add(contact);
  }

  updateContact(contact: Contact) {
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.update(contact);
  }

  destroyContact(contact: any) {
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.delete();
  }
}



