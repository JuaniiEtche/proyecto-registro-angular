import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroLinsiService } from '../../services/registro-linsi.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router,
    private jwtHelper: JwtHelperService,
    private registroLinsiService:RegistroLinsiService,
    private modalService: NgbModal) {

  }

  logear():void {
    this.registroLinsiService.auntenticar(this.usuario,this.clave)
    .then((response:any)=>{
      localStorage.setItem("token",response["jwtToken"]);
      localStorage.setItem("usuario",this.usuario);
      let jwtDescodificado = this.jwtHelper.decodeToken(response['jwtToken'])

      if(jwtDescodificado.rol.authority=="ROLE_admin"){
        this.router.navigate(['principal-admin'])
      }else{
        this.router.navigate(['principal-user'])
      }

    })
    .catch((error:any)=>{
      console.log(error)
    })
  }

  public open(modal: any): void {

    this.modalService.open(modal);

  }

  linsiLogo = '../assets/images/linsi-logo.png';
  logo = '../assets/images/logo.jpg';

  getLinsiLogo(){
    return this.linsiLogo;
  }

  getLogo(){
    return this.logo;
  }

}
