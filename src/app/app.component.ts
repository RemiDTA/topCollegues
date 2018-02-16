import { Component } from '@angular/core';
import { Collegue } from './shared/domain/Collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public cs: CollegueService) {
  }
  ngOnInit() {
  }

}