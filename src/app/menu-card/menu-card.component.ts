import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/menu.model';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent implements OnInit {
  currentMenu: Menu[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.currentMenu = this.menuService.getMenu();
  }
  onAddToCart() {
    console.log();
  }
}
