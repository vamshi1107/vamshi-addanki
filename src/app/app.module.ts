import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule as firebase1} from '@angular/fire'
import {AngularFireModule as firebase2} from '@angular/fire'
import {environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { WorkComponent } from './work/work.component'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {routecomp} from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import { GuardService } from './guard.service';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailsComponent } from './details/details.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkComponent,
    routecomp,
    OrdersComponent,
    HomeComponent,
    DetailsComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    firebase1.initializeApp(environment.fire1),
    firebase2.initializeApp(environment.fire2),
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatBottomSheetModule
  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
