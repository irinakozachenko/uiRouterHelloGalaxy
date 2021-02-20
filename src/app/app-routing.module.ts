import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UIRouterModule } from '@uirouter/angular';
import { Transition } from '@uirouter/core';
import { PeopleService } from 'src/people.service';
import { uiRouterConfigFn } from 'src/router.config';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

const helloState = { name: "hello", url: "/hello", component: HelloComponent };
const aboutState = { name: "about", url: "/about", component: AboutComponent };

const peopleState = {
  name: "people",
  url: "/people",
  component: PeopleComponent,
  resolve: [
    {
      token: "peoples",
      deps:  [PeopleService],
      resolveFn: (peopleService: PeopleService) => peopleService.getAll()
    }
  ]
};

const personState = {
  name: "people.person",
  url: "/:personId",
  component: PersonComponent,
  resolve: [
    {
      token: "person",
      deps:  [Transition, "peoples"],
      resolveFn: (trans: Transition, peoples: any[]) =>
        peoples.find(person => person.id === trans.params().personId)
    }
  ]
};

@NgModule({
  imports: [
    UIRouterModule.forRoot({
    states: [helloState, aboutState, peopleState, personState],
    useHash: false,
    config: uiRouterConfigFn
  })],

  exports: [UIRouterModule]
})

export class AppRoutingModule { }
