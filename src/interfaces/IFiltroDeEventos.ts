export interface IFiltroDeEventos {
    data?: Date | null,
    status: Status
}

export enum Status {
    Completos = 'completos',
    Incompletos = 'incompletos',
    Ambos = 'ambos'
}