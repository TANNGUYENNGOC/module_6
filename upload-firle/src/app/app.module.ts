import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
