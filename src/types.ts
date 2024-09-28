export type Book = {
    id: string,
    title: string
    readings: Reading[]
}

export type Reading = {
    id: string,
    startDate: string,
    startPage: number,
    finalDetails: null | {endDate: string, endPage: number}
}