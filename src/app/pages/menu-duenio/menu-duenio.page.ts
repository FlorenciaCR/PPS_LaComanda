import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-duenio',
  templateUrl: './menu-duenio.page.html',
  styleUrls: ['./menu-duenio.page.scss'],
})
export class MenuDuenioPage implements OnInit {
  opcionDuenio: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleChange(e) {
    switch (e.detail.value) {
      case 'dueñoSup':
        this.opcionDuenio = true;
        break;
      case 'deshabilitar':
        this.opcionDuenio = false;
        break;
    }
  }

}
