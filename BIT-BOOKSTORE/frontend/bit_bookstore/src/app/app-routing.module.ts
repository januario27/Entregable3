import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [

  {
    path : "",
    component : CatalogoLibrosComponent,
    pathMatch : "full"
  },
  {
    path : "libros",
    component : CatalogoLibrosComponent
  },
  {
    path : "clientes",
    component : ClientesComponent
  },
  {
    path : "ventas",
    component : VentasComponent
  },
  {
    path : "carrito-compras",
    component : CarritoComprasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
