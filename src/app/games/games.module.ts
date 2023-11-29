import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ByGenreComponent } from './pages/by-genre/by-genre.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByPlatformComponent } from './pages/by-platform/by-platform.component';
import { GamesRoutingModule } from './games.routing.module';
import { GamesCardComponent } from './components/games-card/games-card.component';



@NgModule({
  declarations: [
    ByGenreComponent,
    ByNameComponent,
    ByPlatformComponent,
    GamesCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule
  ],

})
export class GamesModule { }
