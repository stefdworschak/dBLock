const Block = require('./custom_modules/dw-chain');

//var b = new Block('fee','fi','foe','fum');
//console.log(b.toString());
//console.log(Block.genesis().toString())

console.log(Block.mineBlock(Block.genesis(), 'foobar').toString());
