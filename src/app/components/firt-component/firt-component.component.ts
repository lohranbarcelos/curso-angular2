import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firt-component',
  templateUrl: './firt-component.component.html',
  styleUrls: ['./firt-component.component.css']
})
export class FirtComponentComponent implements OnInit {
name: string = 'Angula';  
age: number = 30;
Job =  'programador';
hobbies = ["corre", "jogar", "Estudar"];
car = {
  name: 'Polo',
  year: 2019,
};
  constructor() { }

  ngOnInit(): void {
  }

}
