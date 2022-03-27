import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  getTransferencias(){
    return this.listaTransferencia;
  }

  adicionar(transferencia: any){
    this.formatteData(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private formatteData(transferencia: any){
    transferencia.data = new Date();
  }
}
