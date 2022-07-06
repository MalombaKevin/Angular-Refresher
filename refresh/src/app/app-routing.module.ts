import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalombaComponent } from './malomba/malomba.component';
import { NamesComponent } from './names/names.component';

const routes: Routes = [
  
    { path: 'names', component: NamesComponent},
    { path: 'malomba', component: MalombaComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
