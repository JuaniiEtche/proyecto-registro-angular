import { Injectable } from '@angular/core';

@Injectable()
export class DataSharingService {
  private dataPromise: Promise<any> = Promise.resolve(null);

  setData(data: any): void {
    this.dataPromise = Promise.resolve(data);
  }

  getData(): Promise<any> {
    return this.dataPromise;
  }
}

// Servicio para compartir datos entre componentes
// Se creo principalmente para utilizar el modal ver proyectos
// y reciba los proyectos para mostrarse
