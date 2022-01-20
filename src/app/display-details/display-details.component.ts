import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  displayDetails = false;
  log = [] as any;

  onClick() {
    this.displayDetails = !this.displayDetails;
    this.log.push(new Date());
    // this.log.push(this.log.length + 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
