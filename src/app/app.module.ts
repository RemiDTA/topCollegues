import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { HttpClientModule } from '@angular/common/http';
import { TableauComponent } from './tableau/tableau.component';
import { ClassiqueComponent } from './classique/classique.component';
import { CarousselComponent } from './caroussel/caroussel.component';

const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /classique affiche le composant A
  { path: 'classique', component: TableauComponent },
  { path: 'classique', component: CarousselComponent },
  { path: '**', redirectTo: 'classique'} // redirige vers la route classique par défaut
  ];


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    TableauComponent,
    ClassiqueComponent,
    CarousselComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }