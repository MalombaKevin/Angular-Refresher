import { Component, Input, OnInit } from '@angular/core';
import { Refresh } from '../refresh';

@Component({
  selector: 'app-name-details',
  templateUrl: './name-details.component.html',
  styleUrls: ['./name-details.component.css']
})
export class NameDetailsComponent implements OnInit {
  @Input() kevo!: Refresh;

  constructor() { }

  ngOnInit(): void {
  }

}
