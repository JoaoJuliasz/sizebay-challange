export type FilterType = 'done' | 'pending' | ''

export type Items = {
    value: string,
    status: 'done' | 'pending'
    itemIndex: number
}