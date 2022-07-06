import { Component, OnInit } from '@angular/core';
import { Refresh } from '../refresh';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  names:Refresh[] = [
    new Refresh(1, 'Kevo', 'JKUAT', 'A hardworking student'),
    new Refresh(2, 'william','UON', 'Best footballer'),
  ]

  toggleDetails(index:any){
    this.names[index].showdescription = !this.names[index].showdescription;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
