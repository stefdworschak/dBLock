const SHA256 = require('crypto-js/sha256');

class dBlock {

  constructor(timestamp, prevHash, hash, data){
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }

  toString(){

    let str = `Block -
        Timestamp: ${this.timestamp}
        prevHash: ${this.prevHash.substr(0,10)}
        hash: ${this.hash.substr(0,10)}
        data: ${this.data}
    `;
    return str;
  }

  static genesis(){
    return new this('Genesis Time','-------','f1r57-H45h',[]);
  }

  static mineBlock(prevBlock, data){
      const timestamp = Date.now();
      const prevHash = prevBlock.hash;
      const hash = dBlock.hash(timestamp,prevHash,data);

      return new this(timestamp, prevHash, hash, data);
  }

  static hash(timestamp, prevHash, data){
      return SHA256(`${timestamp}${prevHash}${data}`).toString();
  }

}


module.exports = dBlock;
