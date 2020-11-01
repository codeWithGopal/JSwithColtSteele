let input = prompt('What do you wnat to do?');
const todos = ['GK', 'CHETAN'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {

        console.log('*****');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('******');
    } else if (input === 'new') {
        const item = prompt('Okay, what is the new item for todo?');
        todos.push(item);
        console.log(`${item} has been addded to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Okay, enter the index to delete.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);

        } else {
            console.log(`Index is not correct `);
        }


    }

    input = prompt('What do you want to do?');

}

console.log("OKay, you quit the app finally !!!");