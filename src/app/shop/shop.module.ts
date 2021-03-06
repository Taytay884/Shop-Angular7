import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { OrderComponent } from './order/order.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import {ShopRoutingModule} from './shop-routing.module';
import { ShopZoneComponent } from './shop-zone/shop-zone.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';

@NgModule({
  declarations: [
    ProductListComponent, ProductItemComponent, CartComponent,
    SearchComponent, SideBarComponent, OrderComponent, ProductManagerComponent, ShopZoneComponent, CategoryFilterComponent
  ],
  imports: [
    CommonModule, ShopRoutingModule
  ]
})
export class ShopModule { }
