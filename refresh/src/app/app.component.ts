import { Component } from '@angular/core';
import { Refresh } from './refresh';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names:Refresh[] = [

    {id:1, name:'Kevin', school:'JKUAT'},
    {id:1, name:'William', school:'KU'},
  ]
}
