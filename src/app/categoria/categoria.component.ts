import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  providers: [CategoriaService, HttpClientModule] 
})
export class CategoriaComponent implements OnInit {
 
    categorias: any;
    constructor(private _categoriaService: CategoriaService){

    }

    ngOnInit(){

      this._categoriaService.getCategorias().then(r => {
        console.log(r);
        this.categorias = r;
      })

      /*
      
      this.volumeService.getVolume(this.processo.outroNumero.trim()).then(r => {                
            let retorno: any = r;           
            this.query = retorno.data.urlArquivo;
            window.open(this.query, "_blank");                      
            this.novaAba = false;
            this._location.back();
          });
          
          */
    }
}
