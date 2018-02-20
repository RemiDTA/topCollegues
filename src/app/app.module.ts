import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { CollegueService } from './shared/service/collegue.service';
import { HttpClientModule } from '@angular/common/http';
import { TableauComponent } from './tableau/tableau.component';
import { ClassiqueComponent } from './classique/classique.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { TriPseudoPipe } from './shared/pipe/tri-pseudo.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';


const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, 
  { path: 'tableau', component: TableauComponent },
  { path: 'caroussel', component: CarousselComponent },
  { path: 'detail/:nom', component: PageDetailComponent },
  { path: '**', redirectTo: 'classique'}, // redirige vers la route classique par défaut
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    TableauComponent,
    ClassiqueComponent,
    CarousselComponent,
    PageDetailComponent,
    ScorePipe,
    TriPseudoPipe,
    VotreDernierAvisComponent
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