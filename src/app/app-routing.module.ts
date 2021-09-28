import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAddComponent } from './admin/menu-add/menu-add.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add-menu', component: MenuAddComponent },
  { path: 'cart', component: CartComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
