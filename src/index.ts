import * as readline from 'readline';
import { mergingCollections } from './function';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readInput(round: number) {
    if (round == 3 ) {
        return new Promise<string>((order) => {
            rl.question('Any sorting do you need? (Asc/Desc/No): ', (input) => {
                order(input);
            });
        });
    } else {
        return new Promise<string>((collections) => {
            rl.question('Enter collection: ', (input) => {
                collections(input);
            });
        });
    }

    
}
  
async function main() {
    let collection1: number[] = []
    let collection2: number[] = []
    let collection3: number[] = []
    let orderBy: string
    let count: number = 0

    console.log('Enter collections (separate by pressing Enter after each collection)');
    console.log('Example: 10, 20, 30, 40');
    console.log('--------------------------------------------------------------------');
    
    while (count < 4) {
        let input = await readInput(count);

        if (count == 0) {
            collection1 = input.split(', ').map(Number)

        } else if (count == 1) {
            collection2 = input.split(', ').map(Number)

        } else if (count == 2) {
            collection3 = input.split(', ').map(Number)

        } else if (count == 3) {
            if (input.toLocaleLowerCase() == 'no') {
                input = undefined
            }
            orderBy = input
        }
        
        count-=-1
    }
    rl.close();

    console.log(mergingCollections(collection1, collection2, collection3, orderBy));
    
}  

main();
