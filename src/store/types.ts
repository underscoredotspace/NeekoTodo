export interface RootState {
    todos: string[]
}

export type Action = { type: string; payload?: unknown }
export type Dispatch = (action: Action) => void
