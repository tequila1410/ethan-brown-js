'use strict';

const sentenses = [
    { subject: 'JaVaScript', verb: 'is', object: 'great' },
    { subject: 'Els', verb: 'are', object: 'large' }
];

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentenses)
    say(s)

    