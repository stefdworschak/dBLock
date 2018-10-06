const dBlock = require('./custom_modules/dBlock');

describe('Block',()=>{
    let data, lastBlock, block;

    beforeEach(()=>{
      data = 'bar';
      prevBlock = dBlock.genesis();
      block = dBlock.mineBlock(prevBlock, data);
    })

    it('sets the `data` to match the input', ()=>{
        expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the hash of the last block', ()=>{
        expect(block.prevHash).toEqual(prevBlock.hash);
    });
});
