import { Component, OnInit } from '@angular/core';
// import { title } from 'process';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
size = 40 
font = 'arial';
color = 'red';

classes = ['green-title', 'samll-title']

underline = 'underline-title';
  constructor() { }

  ngOnInit(): void {
  }

}
