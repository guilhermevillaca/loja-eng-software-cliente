import { NgModule } from "@angular/core";
import { CategoriaService } from "./categoria.service";
import { CategoriaComponent } from "./categoria.component";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    // ...
  ],
  providers: [
    CategoriaService, // seu provider aqui
    HttpClientModule
  ]  
})
export class CategoriaModule { }