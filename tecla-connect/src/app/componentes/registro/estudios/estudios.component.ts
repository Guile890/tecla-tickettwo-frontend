import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalIdiomaComponent } from './modal-idioma/modal-idioma.component';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  save(){

  }
  addEstudio(){

  }
  addIdioma(){
    const dialogRef = this.dialog.open(ModalIdiomaComponent, {
      width: '250px',
      // data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
