import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Refresh } from '../refresh';

@Component({
  selector: 'app-name-details',
  templateUrl: './name-details.component.html',
  styleUrls: ['./name-details.component.css']
})
export class NameDetailsComponent implements OnInit {
  @Input() kevo!: Refresh;

  @Output() isComplete = new EventEmitter<boolean>();

  nameComplete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
