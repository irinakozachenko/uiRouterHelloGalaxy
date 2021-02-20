import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HelloComponent } from 'src/app/hello/hello.component';
import { AboutComponent } from 'src/app/about/about.component';
import { PeopleComponent } from 'src/app/people/people.component';
import { PersonComponent } from 'src/app/person/person.component';
import { PeopleService } from 'src/people.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    PeopleComponent,
    PersonComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {


}
