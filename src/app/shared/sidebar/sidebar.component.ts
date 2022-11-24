import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/GifsService/GifsService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private GifsService:GifsService) { }

  ngOnInit(): void {
  }

  get historial():string[]{
    return this.GifsService.historial;
  }

  search(item:string){
    
    this.GifsService.buscarGifs(item);

    
  }

}
