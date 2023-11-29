import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByGenreComponent } from './pages/by-genre/by-genre.component';
import { ByPlatformComponent } from './pages/by-platform/by-platform.component';

const routes: Routes = [

  {
    path:'games/by-name',
    component:ByNameComponent
  },
  {
    path:'games/by-genre',
    component:ByGenreComponent
  },
  {
    path:"games/by-platform",
    component:ByPlatformComponent
  },
  {
    path:"games/by/:id",
    component:ByNameComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
