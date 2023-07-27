import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataSharingService } from 'src/app/services/data-sharing-service.service';
import { RegistroLinsiService } from 'src/app/services/registro-linsi.service';

@Component({
  selector: 'app-modal-eliminar-becario',
  templateUrl: './modal-eliminar-becario.component.html',
  styleUrls: ['./modal-eliminar-becario.component.css']
})
export class ModalEliminarBecarioComponent {
  constructor(public activeModal: NgbActiveModal, private dataSharingService: DataSharingService, private registroLinsiService: RegistroLinsiService) {}
  receivedData: any;
  
  persona: any;

  onCloseModal(): void {

    this.activeModal.close();
  }

  async ngOnInit(): Promise<void> {
    this.persona = await this.dataSharingService.getData();
  }

  eliminarBecarioLinea(idPersona:number,nombreLinea:string){
    this.registroLinsiService.eliminarBecarioLinea(idPersona,nombreLinea).then(()=>{
      window.location.reload();
    })
  }
}
