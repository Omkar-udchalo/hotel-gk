import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { tap } from 'rxjs/operators';
import { Menu } from './menu.model';
@Injectable({ providedIn: 'root' })
export class MenuStorageService {
  constructor(private http: HttpClient, private menuService: MenuService) {}

  storeMenu() {
    const currentMenu = this.menuService.getMenu();
    this.http
      .put(
        'https://hotel-app-d584c-default-rtdb.firebaseio.com/menu.json',
        currentMenu
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchMenu() {
   return this.http
      .get<Menu[]>(
        'https://hotel-app-d584c-default-rtdb.firebaseio.com/menu.json'
      )
      .pipe(
        tap((menu) => {
          this.menuService.setMenu(menu);
        })
      );
  }
}
