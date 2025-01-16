import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem, IonInput, IonButton, IonLabel } from '@ionic/angular/standalone';
import { FormControl,FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,ReactiveFormsModule  ], 
})
export class ContactoPage implements OnInit {

  constructor() { }
  nombre = new FormControl('');
  cambiarNombre(){
    this.nombre.setValue('Ornitorrinco');
  }
  usuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
  });
  guardarDatos(){
    console.log(this.usuario.value);
  }

  ngOnInit() {
  }

}
