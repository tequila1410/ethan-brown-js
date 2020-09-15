'use strict';

const sentenses = [
    { subject: 'JaVaScript', verb: 'is', object: 'grea3' },
    { subject: 'Els', verb: 'are', object: 'larg2' }
];

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentenses)
    say(s)

    