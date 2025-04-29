import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent,


    data: { renderMode: 'client' } //Para criar o dist para o gh-pages
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
