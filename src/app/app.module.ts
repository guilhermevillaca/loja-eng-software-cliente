import { NgModule } from "@angular/core";
import { CategoriaService } from "./categoria/categoria.service";
import { CategoriaComponent } from "./categoria/categoria.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  imports: [
    CategoriaComponent,
    HttpClientModule
  ],
  declarations: [
    // ...
  ],
  providers: [
    CategoriaService, // seu provider aqui
  ]
})
export class AppModule { }