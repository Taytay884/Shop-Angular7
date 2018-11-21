import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLayoutComponent} from './home/layout/layout.component';
import {ShopModule} from './shop/shop.module';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, pathMatch: 'full'},
  {path: 'shop', loadChildren: () => ShopModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
