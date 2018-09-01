import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

  @Input() description: string;
  @Input() steps: string;

  constructor() { }

  ngOnInit() {
  }

}
