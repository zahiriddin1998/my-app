import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDataComponent } from './movie.data/movie.data.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'data', component: MovieDataComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MovieDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
