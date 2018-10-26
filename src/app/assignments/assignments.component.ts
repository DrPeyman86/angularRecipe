import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  details = [];
  iteration = 0;
  detailsCountFive = false
  showSecret = false;

  addDetails() {
    this.showSecret = !this.showSecret;
    this.iteration++
    //this.details.push(this.iteration)
    this.details.push(new Date());



  }

  constructor() {
    this.detailsCountFive = this.details.length>=5?true:false;
  }

  ngOnInit() {
  }

}
