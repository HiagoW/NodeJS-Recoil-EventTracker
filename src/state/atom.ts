import { IFiltroDeEventos } from './../interfaces/IFiltroDeEventos';
import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2022-05-06T09:00"),
      fim: new Date("2022-05-06T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2022-05-07T09:00"),
      fim: new Date("2022-05-07T11:00"),
      completo: false,
      id: 1642342959,
    }
  ],
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})
