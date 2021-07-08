export const INCREMENTCOUNTER = "counter/increment"

export interface IncrementCounterAction {
    type: typeof INCREMENTCOUNTER,
}

export const DECREMENTCOUNTER = "counter/decrement"

export interface DecrementCounterAction {
    type: typeof DECREMENTCOUNTER
}

export const SYNCINCREMENTACTION = "counter/sync_increment"

export interface SyncIncrementAction {
    type: typeof SYNCINCREMENTACTION
}

export const SYNCDECREMENTACTION = "counter/sync_decrement"

export interface SyncDecrementAction {
    type: typeof SYNCDECREMENTACTION
}

export type counterAction =
    | IncrementCounterAction
    | DecrementCounterAction
    | SyncDecrementAction
    | SyncIncrementAction