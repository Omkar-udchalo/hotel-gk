import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Menu } from '../shared/menu.model';
import { MenuService } from '../shared/menu.service';
import { MenuStorageService } from '../shared/menustorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  // isLoaded = false;
  currentMenu!: Menu[];
  constructor(
    private menuService: MenuService,
    private menuStorageService: MenuStorageService
  ) {}

  ngOnInit(): void {
    this.menuStorageService.fetchMenu().subscribe();
    this.currentMenu = this.menuService.getMenu();
  }
}
