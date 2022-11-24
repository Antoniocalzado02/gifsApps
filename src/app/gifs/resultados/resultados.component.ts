import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/searchResponse.interface';
import { GifsService } from '../GifsService/GifsService.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  constructor(private GifsService:GifsService) { }

  ngOnInit(): void {
  }

  get results():Gif[]{
    return this.GifsService.results
  }

}
