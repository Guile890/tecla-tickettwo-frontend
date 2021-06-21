import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  id: number,
  tipo: string;
  institucion: string;
  documento: string;
  yearFin: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, tipo: 'Hydrogen', institucion: '', documento: 'H', yearFin: '2017'},

];

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipo', 'institucion', 'documento','yearFin'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
  save(){

  }
  addData(){

  }

}
