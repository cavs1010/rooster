const assert = require('assert');

const Rooster = require('../index');


describe ('This is the first describe', ()=>{
    describe ('For the announce method', () => {
        it('returns a rooster call', () => {
            // Setup 
            const expected = 'cock-a-doodle-doo!';
    
            // Exercise
            const result = Rooster.announceDawn()
    
            // Verify
            assert.ok(result === expected);
    
          });
    });
    describe ('Time at dawn method', () => {
        it ('returns its argument as a string', () => {
            // Setup
            const expected = '22';

            // Exercise
            const result = Rooster.timeAtDawn(22);

            // Verify
            assert.ok(result === expected);
        });

        it ('returns an error if the value is less than 0', () =>{
            // Setup
            const expected = RangeError;

            // Verify
            assert.throws(() =>{
                Rooster.timeAtDawn(-15);
            }, expected)
        });

        it ('returns an error if the value is greater than 23',() => {
            // Setup
            const expected = RangeError;

            //Verify
            assert.throws(() => {
                Rooster.timeAtDawn(30);
            });
        });
    });

});