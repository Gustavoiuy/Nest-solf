import {  Usuario } from '../entities/usuario.entity'


export interface LoginResponse {

    user: Usuario;
    token: string;

}