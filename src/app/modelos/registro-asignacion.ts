export class RegistroAsignacion {
	idRegistroAsignacion: any;
	fechaFinAnexoAsignacion: any;
	fechaFinAnexoFacturacion: any;
	fechaFinAsignacion: any;
	fechaInicioAnexoAsignacion:any;
	fechaInicioAnexoFacturacion: any;
	fechaInicioAsignacion: any;
	horario: any;
	propuestaEconomica: any;
	ubicacionConsultor: any;
	idanexo: any;
	idArea: any;
	idCliente: any;
	idGerenteComercial: any;
	idGerente: any;
	idLider: any;
	Perfil: any;
	persona: any;
	Anexo: any;


	constructor(){
		this.persona = {
			idpersona: '',
			nombre: '',
			apellidoPaterno: '',
			apellidoMaterno: '',
			correo:''
		};

		this.idCliente={
			idCliente:'',
			nombreCliente:''
		};

	}
}
