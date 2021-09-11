import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAddComponent } from './admin/menu-add/menu-add.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from './shared/menu.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    MenuAddComponent,
    LoaderComponent,
    MenuCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
