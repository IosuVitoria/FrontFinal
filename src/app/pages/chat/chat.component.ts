import { UserI } from 'src/app/models/user.model';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  usuarioLogeado!:UserI;
  nuevoMensaje: string= "" ;
  id: string = " ";
  mensajes: any = [
    {
      emisor: "64a703630e6ea120aa93da13",
      texto: "Hola, que tal?"
    },{
      emisor: "id",
      texto: "todo bien y tu?"
    },{
      emisor: "64a703630e6ea120aa93da13",
      texto: "que bueno"
    },{
      emisor: "64a703630e6ea120aa93da13",
      texto: "chao, me voy"
    },{
      emisor: "id",
      texto: "que te vaya bien"
    },
  ];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
   // this.authService.getUserLogged().subscribe(usuario => {
     // this.usuarioLogeado = usuario;
   // })
  // this.usuarioLogeado = sessionStorage.getItem("user")
   //let {_id}=sessionStorage.getItem("user");
    let user = JSON.parse(String(sessionStorage.getItem('user')));
   console.log(user._id);
   this.id=user._id;
  }
  enviarMensaje(){
    console.log(this.nuevoMensaje);
    let mensaje = {
      emisor: this.id,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);


    this.nuevoMensaje = " ";




    //this.nuevoMensaje = {
     // emisor: this.usuarioLogeado.
      
   // }
  }

}
