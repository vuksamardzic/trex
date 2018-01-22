export interface BoardI {
    id: string;
    name: string;
    list: ListI[];
    
}

interface ListI {
    id: string;
    name: string;
    card: CardI[];
}

interface CardI {
    id: string;
    name: string;
    active: boolean;
}
