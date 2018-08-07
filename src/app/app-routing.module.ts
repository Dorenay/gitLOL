import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageChampionsComponent } from './page-champions/page-champions.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'champions', component: PageChampionsComponent },
  { path: 'home', component: PageHomeComponent }  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}