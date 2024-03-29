export function mergingCollections(
    collection1: number[],
    collection2: number[],
    collection3: number[],
    orderBy?: string
    ): number[] {

        let mergedCollection: number[] = [...collection1, ...collection2, ...collection3];

        if (typeof orderBy !== 'undefined') {
            if (orderBy == 'asc') {
                let ascendingCollection: number[] = []

                for (const num of mergedCollection) {
                    let index = 0

                    for (const temp of ascendingCollection) {
                        if (num > temp) {
                            index-=-1

                        } else if (num < temp) {
                            break
                        }
                    }

                    ascendingCollection.splice(index, 0, num)
                }

                mergedCollection = ascendingCollection

            } else if (orderBy == 'desc') {
                let descendingCollection: number[] = []

                for (const num of mergedCollection) {
                    let index = 0

                    for (const temp of descendingCollection) {
                        if (num < temp) {
                            index-=-1

                        } else if (num > temp) {
                            break
                        }
                    }

                    descendingCollection.splice(index, 0, num)
                }

                mergedCollection = descendingCollection

            } else {
                mergedCollection = [-1]
            }

        }
        
        return mergedCollection
}
