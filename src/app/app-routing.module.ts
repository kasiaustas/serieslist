import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {StartPageComponent} from "./start-page/start-page.component";


const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', component: StartPageComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
