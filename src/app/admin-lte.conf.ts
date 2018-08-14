//modelo de configuracion para el navbar, muestra menus y sub menus

export var adminLteConf = {
  skin: 'blue',
  layout: 'fixed',
  sidebarLeftMenu: [
	{ label: 'Menu de Navegación', separator: true },
	  {
		  label: 'Reportes', iconClasses: 'fa fa-files-o', children: [
			  { label: 'Pago de Anexos', iconClasses: 'none', route: '/reporteAnexo' },
			  { label: 'Contratos', iconClasses: 'none', route: '/contrato' },
			  { label: 'Consultores Asignados', iconClasses: 'none', route: '/reporteAsignados' },
			  { label: 'Consultores no Asignados', iconClasses: 'none', route: '/noasignados' }
		  ]
	  },
	{ label: 'Catálogos',iconClasses: 'fa fa-folder',children:[
		{ label: 'Anexos', iconClasses: 'none', route: '/showAnexos' },
		{ label: 'Areas', iconClasses: 'none', route: '/showAreas' },
		{ label: 'Bancos', iconClasses: 'none', route: '/bancos' },
		{ label: 'Clientes', iconClasses: 'none', route: '/ShowClientes' },
		{ label: 'Complementos', iconClasses: 'none', route: '/complemento' },
		{ label: 'Perfiles', iconClasses: 'none', route: '/perfiles' },
		{ label: 'Nominas', iconClasses: 'none', route: '/nominas' }
	]},

	  { label: 'Registro Pagos', iconClasses: 'fa fa-money', children: [
		  { label: 'Pago de Anexo', iconClasses: 'none', route: '/pagoAnexos' }
	  ]},
	  /*
	  {label:'Inicio', iconClasses:'fa fa-dashboard', children:[
	  	  {label:'Indice de Consultores',iconClasses:'none',route:'/'}
	  ]},*/

	  {label:'Metricas', iconClasses:'fa fa-pie-chart',children:[
	  		{ label: 'Actividad de Consultores', iconClasses: 'none', route: '/graficaConsultores' },
	  ]},

	  {label:'Administración',iconClasses:'fa fa-laptop',children:[
		  { label: 'Nuevo Usuario', iconClasses: 'none', route: '/nuevousuario' },
		  { label: 'Consultar Usuario', iconClasses: 'none', route: '/consultarusuario' }
	  ]},
	  {label:'Contratación',iconClasses:'fa fa-edit',children:[
		  { label: 'Nuevo Consultor', iconClasses: 'none', route: '/nuevoconsultor' },
		  { label: 'Búsqueda de Consultor', iconClasses: 'none', route: '/buscarconsultor' },
		  { label: 'Bajas', iconClasses: 'none', route: '/consultarbajas' }
	  ]},

		
  ]
	}
