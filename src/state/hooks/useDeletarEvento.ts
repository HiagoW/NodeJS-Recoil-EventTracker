import { listaDeEventosState } from './../atom';
import { IEvento } from './../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';

const useDeletarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        setListaDeEventos((listaAntiga) => [
            ...listaAntiga.filter(evt => evento.id !== evt.id)
        ])
    }
}

export default useDeletarEvento