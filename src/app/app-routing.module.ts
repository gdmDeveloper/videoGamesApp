import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './shared/pages/info/info/info.component';
import { GamesRoutingModule } from './games/games.routing.module';

const routes: Routes = [
  {
    path:'',
    component: InfoComponent
  },
  {
    path:'info',
    component: InfoComponent
  },
  {
    path:'games/by-name',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  GamesRoutingModule]
})
export class AppRoutingModule { }
