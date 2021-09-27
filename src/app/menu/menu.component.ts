import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

import { Menu } from '../shared/menu.model';
import { MenuService } from '../shared/menu.service';
import { MenuStorageService } from '../shared/menustorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  currentMenu: Menu[] = [];
  constructor(
    private fireAuth: AngularFireAuth,
    private menuService: MenuService,
    private menuStorageService: MenuStorageService
  ) {
    if (fireAuth.authState != null) {
      this.menuStorageService.fetchMenu().then((data) => {
        console.log(data);
        this.menuService.setMenu(data);
        this.currentMenu = this.menuService.getMenu();
      });
    }
  }

  ngOnInit(): void {}
}
