import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';

export const routes: Routes = [
    { path: '', component: CategoriaComponent},
    { path: 'categoria', component: CategoriaComponent}
];
