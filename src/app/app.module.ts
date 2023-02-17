import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { ContactService } from './services/contact.service';
import { ListContactsComponent } from './componenents/list-contacts/list-contacts.component';
import { AddContactComponent } from './componenents/add-contact/add-contact.component';
import { NavbarComponent } from './componenents/navbar/navbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ListContactsComponent,
        AddContactComponent,
        NavbarComponent
    ],
    providers: [ContactService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        FormsModule
       
    ]
})
export class AppModule { }
