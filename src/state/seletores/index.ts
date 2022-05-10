import { IEvento } from './../../interfaces/IEvento';
import { Status } from './../../interfaces/IFiltroDeEventos';
import { filtroDeEventos, listaDeEventosState } from "./../atom";
import { selector } from "recoil";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter((evento) => {
      let filtroData = true;
      let filtroStatus = true;
      if (filtro.data) {
        filtroData =
          filtro.data.toISOString().slice(0, 10) ===
          evento.inicio.toISOString().slice(0, 10);
      }
      if (filtro.status === Status.Completos) {
        filtroStatus = evento.completo;
      } else if (filtro.status === Status.Incompletos) {
        filtroStatus = !evento.completo;
      }

      return filtroData && filtroStatus;
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const respostaHttp = await fetch('http://localhost:8080/eventos')
    const eventosJson: IEvento[] = await respostaHttp.json()
    return eventosJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})
