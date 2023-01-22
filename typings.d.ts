export interface Carousels {
    data: CarouselsDatum[];
}

export type CarouselsDatum = {
    id:           number;
    status:       string;
    date_created?: Date;
    date_updated?: Date;
    imgUrl:       string;
    imgAlt:       string;
}