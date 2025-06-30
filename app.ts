import * as readlineSync from 'readline-sync';
import { setPassword } from './crypto/encryption';
import { saveNote, getNotes } from './Storage';

// ADD THIS BLOCK BEFORE main()
const pw = readlineSync.question('Enter your encryption password: ', { hideEchoBack: true });
setPassword(pw);

function main() {
    console.log('Welcome to the Encrypted Notes CLI');
    while (true) {
        console.log('1. Write a Note');
        console.log('2. Read Notes');
        console.log('3. Exit');
        const option = readlineSync.question('Please select an option: ');
        if (option === '1') {
            const note = readlineSync.question('Enter your note: ');
            saveNote(note);
            console.log('Note saved (encrypted)!');
        } else if (option === '2') {
            const notes = getNotes();
            if (!notes.length) {
                console.log('No notes found.');
            } else {
                console.log('\nYour Notes:');
                notes.forEach((note, idx) => {
                    const date = note.createdAt ? ` (Saved on: ${note.createdAt})` : '';
                    console.log(`${idx + 1}: ${note.content}${date}`);
                });
            }
        } else if (option === '3') {
            console.log('Goodbye!');
            break;
        } else {
            console.log('Invalid option.');
        }
    }
}

main();