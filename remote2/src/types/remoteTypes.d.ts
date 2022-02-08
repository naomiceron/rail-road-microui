declare module 'remote1/TrainService' {
    declare function getDestinations (): Promise<R>
    declare function updateDestination (): Promise<R>
}

declare module 'remote1/ReceiverService' {
    declare function getReceivers (): Promise<R>
    declare function updateReceivers (): Promise<R>
}