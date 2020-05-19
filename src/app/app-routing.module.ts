import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVooComponent } from './cadastro/lista-voo/lista-voo.component';
import { CadastraAlteraVooComponent } from './cadastro/cadastra-altera-voo/cadastra-altera-voo.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ListaVooComponent },
  { path: 'novoAltera', component: CadastraAlteraVooComponent },
  {path: 'voo-altera/:id', component: CadastraAlteraVooComponent},
  { path: '**', component: ListaVooComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
