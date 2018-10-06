const dBlock = require('./custom_modules/dBlock');

//var b = new Block('fee','fi','foe','fum');
//console.log(b.toString());
//console.log(Block.genesis().toString())

//console.log(dBlock.mineBlock(dBlock.genesis(), 'foobar').toString());

block = dBlock.genesis()
console.log(block.hash);
block2 = dBlock.mineBlock(block,'foo');
console.log(block2.prevHash);

//console.log(dBlock)
