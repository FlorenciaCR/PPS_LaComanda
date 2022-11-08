import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-duenio',
  templateUrl: './menu-duenio.page.html',
  styleUrls: ['./menu-duenio.page.scss'],
})
export class MenuDuenioPage implements OnInit {
  opcionDuenio: boolean = false;
  opcionDeshabilitado: boolean = false;
  opcionEmpleado: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleChange(e) {
    switch (e.detail.value) {
      case 'dueñoSup':
        this.opcionDuenio = true;
        this.opcionDeshabilitado = false;
        this.opcionEmpleado = false;
        break;
      case 'deshabilitar':
        this.opcionDuenio = false;
        this.opcionDeshabilitado = true;
        this.opcionEmpleado = false;
        break;
      case 'empleado':
        this.opcionDuenio = false;
        this.opcionDeshabilitado = false;
        this.opcionEmpleado = true;
        break;
    }
  }

}
