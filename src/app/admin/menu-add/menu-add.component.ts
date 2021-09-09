import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Menu } from 'src/app/shared/menu.model';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css'],
})
export class MenuAddComponent implements OnInit {
  menu!: Menu;
  constructor() {}

  ngOnInit(): void {}

  onMenuAdded(formData: NgForm) {
    console.log(formData);
    const name = formData.value.menuname;
    const imageLink = formData.value.menuimg;
    const price = formData.value.price;

    this.menu = new Menu(name, imageLink, price);
  }
}
