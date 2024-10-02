export type Book = {
    id: string
    title: string
    readings: Reading[]
}

export type Reading = {
    id: string
    startDate: Date
    startPage: number
    finalDetails: null | { endDate: Date; endPage: number }
}
