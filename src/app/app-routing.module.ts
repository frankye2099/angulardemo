import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  { path: 'heros', loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule) },
  { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
