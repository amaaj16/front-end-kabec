export class Anexo {

	idanexo: any;
	anexooc: any;
	clavepresupuestal: any;
	condicionespago: any;
	descripcion: any;
	fechaFin: any;
	fechaInicio: any;
	importeanexo: any;
	montoxpago: any;
	numeropagos: any;
	observaciones: any;
	tarifa: any;
	vobo: any;
	cliente: any;
	periodo: any;

  constructor(){
	  this.cliente = {
		  idCliente: '',
		  nombreCliente: ''
	  };

	  this.periodo = {
		  idperiodo: '',
		  periodo: ''
	  };


  }
}
