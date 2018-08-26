import States from './states.js';

const states = new States({
    name: 'maksim',
    age: '25'
});

pringState();

states.push({
    name: 'dima'
});

pringState();

states.push({
    age: '55'
});

pringState();

states.undo();

pringState();

function pringState() {
    console.log();
    console.log('====================');

    console.log('name:', states.get('name'));
    console.log('age:', states.get('age'));
}
///////////////////////////////////////////////////

const replace = document.getElementById('undo'),
	  nextName = document.getElementById('name'),
	  nextAge = document.getElementById('age');

    nextName.addEventListener('change', imputse);
    nextAge.addEventListener('change', imputse);

    function imputse (e) {
        const idValue = event.target.id,
              inputValue = event.target.value,
              valueNextState = {};

        valueNextState[idValue] = inputValue;
        states.push(valueNextState);
    }
	  
replace.addEventListener('click',(e) => {
    states.undo()

    const lastName = states.get('name')
    const lastAge = states.get('age')
    
    nextName.value = lastName
    nextAge.value = lastAge
});
