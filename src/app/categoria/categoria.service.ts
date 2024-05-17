import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CategoriaService {


    constructor(        
        protected http: HttpClient        
    ) {
        
    }

    public getCategorias(){                
        return firstValueFrom(this.http.get(`http://localhost/atv1/categorias`));  
    }

}