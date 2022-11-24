import { HttpRequest } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../GifsService/GifsService.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private GifsServicie:GifsService) { }


  query:string="";

  

  search(){
    
    this.GifsServicie.buscarGifs(this.query)
    this.query="";

    
  }

  
  


}
