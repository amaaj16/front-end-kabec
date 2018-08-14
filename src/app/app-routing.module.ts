import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAreaComponent} from './add-area/add-area.component';
import {AreaComponent} from './area/area.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ReportePagosComponent} from './reporte-pagos/reporte-pagos.component';
import {PagosAnexoComponent} from './pagos-anexo/pagos-anexo.component';
import {AnexoComponent} from './anexo/anexo.component';
import {AddAnexoComponent} from './add-anexo/add-anexo.component';
import {DClienteComponent} from './d-cliente/d-cliente.component';
import {AppComponent} from './app.component';
//bryans
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';

import { BancoComponent } from './banco/banco.component';
import { AddBancoComponent } from './banco/add-banco.component';

import { NominaComponent } from './nomina/nomina.component';
import { AddNominaComponent } from './nomina/add-nomina.component';

import { ComplementoComponent } from './complemento/complemento.component';
import { AddComplementoComponent } from './complemento/add-complemento.component';

import { RepcontratoComponent } from './repcontrato/repcontrato.component';
import { ReporteasignadosComponent } from './reporteasignados/reporteasignados.component';
import {NoasignadosComponent} from './noasignados/noasignados.component';
import {NuevoUsuario} from '../nuevousuario/nuevousuario.component';
import {ConsultarUsuario} from './consultarusuario/consultarusuario.component';
import {NuevoConsultor} from './nuevoconsultor/nuevoconsultor.component';
import {BuscarConsultor} from './buscarconsultor/buscarconsultor.component';
import {ConsultarBajas} from './consultarbajas/consultarbajas.component';
import {PerfilComponent} from './perfil/perfil.component';
import {AddPerfilComponent} from './add-perfil/add-perfil.component';
import {GraficaConsultoresComponent} from './grafica-consultores/grafica-consultores.component';

const routes: Routes = [
	
	{ path: 'reporteAsignados', component: ReporteasignadosComponent, pathMatch: 'full' },
	{ path:'noasignados', component:NoasignadosComponent, pathMatch: 'full'},
	{ path: 'addClientes', component: DClienteComponent, pathMatch: 'full' },
	{ path: 'addAreas', component: AddAreaComponent, pathMatch: 'full' },
	{ path:'showAreas', component: AreaComponent, pathMatch: 'full'},
	{ path:'ShowClientes',component:ClienteComponent, pathMatch: 'full'},
	{ path:'reporteAnexo', component:ReportePagosComponent, pathMatch: 'full'},
	{ path: 'pagoAnexos', component: PagosAnexoComponent, pathMatch: 'full'},
	{ path: 'addAnexo', component:AddAnexoComponent , pathMatch: 'full'},
	{ path:'showAnexos',component: AnexoComponent, pathMatch: 'full'},
//bryan
	{ path: 'users', component: UserComponent, pathMatch: 'full' },
	{ path: 'add', component: AddUserComponent, pathMatch: 'full' },

	{ path: 'bancos', component: BancoComponent, pathMatch: 'full' },
	{ path: 'addBancos', component: AddBancoComponent, pathMatch: 'full' },

	{ path: 'nominas', component: NominaComponent, pathMatch: 'full' },
	{ path: 'addNominas', component: AddNominaComponent, pathMatch: 'full' },

	{ path: 'complemento', component: ComplementoComponent, pathMatch: 'full' },
	{ path: 'addComplementos', component: AddComplementoComponent, pathMatch: 'full' },

	{ path: 'contrato', component: RepcontratoComponent, pathMatch: 'full' },
	{ path:'nuevousuario', component:NuevoUsuario, pathMatch:'full'},
	{ path: 'consultarusuario', component: ConsultarUsuario, pathMatch: 'full' },
	{ path:'nuevoconsultor', component:NuevoConsultor, pathMatch:'full'},
	{ path: 'buscarconsultor', component: BuscarConsultor, pathMatch: 'full' },
	{ path: 'consultarbajas', component: ConsultarBajas, pathMatch: 'full' },
	{ path: '',component: AreaComponent, pathMatch: 'full'},
	{ path:'perfiles', component:PerfilComponent, pathMatch: 'full'},
	{ path:'addPerfiles', component:AddPerfilComponent, pathMatch: 'full'},
	{ path:'graficaConsultores', component:GraficaConsultoresComponent, pathMatch: 'full'}

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
