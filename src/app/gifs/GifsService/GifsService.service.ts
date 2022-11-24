import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

    @Injectable({
        providedIn: 'root'
    })
    export class GifsService {
        
        private _historial:string[]=[]
        private api_key: string ="q502okE6E9wzi7lPDorARwhOnAq4Mgfw"
        private url: string="https://api.giphy.com/v1/gifs/search"
        results: Gif[]=[];
        
        constructor(private http:HttpClient) { 
            this._historial=JSON.parse(localStorage.getItem('query')!) || [];
        }
        

        get historial():string[]{
            
            return [...this._historial]
        }

        buscarGifs(query:string):void{
            let clean=query.trim();
            if(clean!=="" && !this._historial.includes(clean)){
                this._historial.unshift(query)
                this._historial=this._historial.splice(0,10)
                
            }
            localStorage.setItem('query',JSON.stringify(this._historial))

            const params=new HttpParams()
            .set('api_key',this.api_key)
            .set('q',query)
            .set('limit',10)

            this.http.get<GifsSearchResponse>(this.url,{params})
            .subscribe((resp)=>this.results=resp.data)

        }

       

        


    }