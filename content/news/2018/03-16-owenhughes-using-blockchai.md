---
title: "Using Blockchain To Protect Your Audit Logs  A Theoretical Discussion"
date: 2018-03-16T00:15:22.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3ebd88fedb74df402328f3231f9619f5"
---
<p><strong>Introduction</strong></p>
<p>We are all aware of audit logs on systems and what they are used for. We all know various ways of protecting audit logs from tampering. One of the most popular ways of log protection is isolating them from the general user and administrator population using separation of duties or responsibilities. This works well but has a penalty of involving another person with Audit Admin privileges. Also, what if the Audit Admin colludes with a nefarious actor to alter logs after a damaging act has been committed.</p>
<p>I have thought about this for a while, and at the same time have been researching Blockchain. I have come to the conclusion the Blockchain could provide an answer to protecting audit logs without the need for an Audit Admin.</p>
<p><strong><u>This blog is just a thought piece to get you thinking and hopefully provoke a discussion.</u></strong></p>
<p><strong>What is Blockchain?</strong></p>
<p>Well lets first decide what it is not. Blockchain is not Bitcoin. Bitcoin is a system for exchanging value based on Blockchain technology (<a href="https://bitcoin.org/bitcoin.pdf" rel="nofollow">Bitcoin: A Peer-to-Peer Electronic Cash System - Satoshi Nakamoto</a>).</p>
<p>So let’s see what Wikipedia says <a href="https://en.wikipedia.org/wiki/Blockchain" rel="nofollow">blockchain</a> is.</p>
<p><em>A blockchain, originally block chain, is a continuously growing list of </em><a href="https://en.wikipedia.org/wiki/Record_%28computer_science%29" rel="nofollow"><em>records</em></a><em>, called blocks, which are linked and secured using </em><a href="https://en.wikipedia.org/wiki/Cryptography" rel="nofollow"><em>cryptography</em></a><em>. Each block typically contains a </em><a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function" rel="nofollow"><em>cryptographic hash</em></a><em> of the previous block, a </em><a href="https://en.wikipedia.org/wiki/Trusted_timestamping" rel="nofollow"><em>timestamp</em></a><em> and transaction data. By design, a blockchain is inherently resistant to modification of the data. It is &#34;an open, </em><a href="https://en.wikipedia.org/wiki/Distributed_ledger" rel="nofollow"><em>distributed ledger</em></a><em> that can record transactions between two parties efficiently and in a verifiable and permanent way”.</em></p>
<p>So really, a blockchain is a way of storing data securely such that each new data element relies on its predecessor to validate itself.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" /></p>
<p> <img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="b8dec8b6dbb4df402328f3231f96196c.iix" width="428" height="357" /></p>
<p> </p>
<p><strong>An Audit Blockchain</strong></p>
<p>So now let us look at how we would implement an audit log in blockchain. Firstly, we will assume that we take the whole audit record as it stands and convert it to a JSON document of name-value pairs, if it is not already in this format.</p>
<p> </p>
<pre class="language-javascript"><code>{
  &#34;id&#34;:           12345678,
  &#34;actor_id&#34;:     3210,
  &#34;source_id&#34;:    3456,
  &#34;source_type&#34;:  &#34;user&#34;,
  &#34;source_label&#34;: &#34;Jane Doe&#34;,
  &#34;action&#34;:       &#34;update&#34;,
  &#34;changes_description&#34;: &#34;Role changed from Administrator to Super User&#34;
  &#34;ip_address&#34;:   &#34;NNN.NNN.NNN.NNN&#34;,
  &#34;created_at&#34;:  &#34;2018-02-05T11:32:44&#34;,
}
</code></pre>
<p> </p>
<p>Why JSON? It is easier to work with, in my opinion, and I can treat it like a string payload for the block in the blockchain.</p>
<p>OK, so now what do we need for a block in a block chain. Below is a very rudimentary block in a blockchain, but more than enough for our purposes. Let’s look at each component in turn and see what it is for.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="af3f4c3adbb4df402328f3231f9619a7.iix" width="209" height="201" /></p>
<p> </p>
<p>The <strong>Index</strong> denotes the position of the block in the blockchain. Every blockchain starts with a “Genesis Block” with an index of 0. This typically contains no important information and is typically hardcoded, whereas all other blocks are created at runtime.</p>
<p>The <strong>Timestamp</strong> records when the block was created. This can be important as blockchain can be used for storing time series data.</p>
<p>The <strong>Hash</strong> is the hash value of the entire block after it has been passed through a hashing algorithm, usually SHA256. NOTE: The Hash can only be populated after the entire block has been filled.</p>
<p>The <strong>Previous Hash</strong> is fairly self-explanatory but is where the strength of the blockchain lies. This field refers to the hash value stored in the previous block.</p>
<p>The <strong>Nonce</strong> in a block is a 32-bit (4-byte) field whose value is set so that the hash of the block will contain a run of leading zeros. This is used to denote the proof of work, more about this later.</p>
<p>The <strong>Data/Payload</strong> is, in our case, the JSON document audit record described above. In some implementations, this will be the root of a tree of transactions known as a Merkle Root. Google it!</p>
<p><strong>The Strength of the Chain</strong></p>
<p>The diagram below illustrates the how the blockchain derives its strength. If each block is dependent on the hash value in its previous block it becomes impossible to change a block without having to change every block after the changed block. This is compounded further due to the fact that blockchains are distributed with copies spread across network nodes. Not only would you have to change all blocks after the changed block, you would have to do this in at least 51% of all the copies of the blockchain before the system realises this has been done and evicts the rogue blockchains and blocks the offending user.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="c19ec876dbb4df402328f3231f961908.iix" width="708" height="198" /></p>
<p><strong>Implementation in JavaScript</strong></p>
<p>OK, Now for some code. Our constructor looks like this</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="9f4e8cf2dbb4df402328f3231f9619ca.iix" width="703" height="332" /></p>
<p>The “difficulty &#61; 4” you see above is used by the proof of work to define the leading number of zeros (4 in this case) required when creating the hash for a block.</p>
<p>“What?” I hear you say. “Proof of Work! Please explain.”</p>
<p> I mentioned the concept of a proof of work, let me explain a little. You want anyone putting something into the blockchain to have to expend energy to do this. Why? Well making it “expensive” to add a block to the blockchain acts as an additional protection mechanism. Remember I said that you would have to change every block after the changed block, and do this in 51% of the copies of the blockchain, well you have to work hard to add these blocks. This makes it not worth your while to try corrupting the blockchain.</p>
<p> A proof of work is a piece of data which is difficult (costly, time-consuming) to produce but easy for others to verify and which satisfies certain requirements. Producing a proof of work can be a random process with low probability so that a lot of trial and error is required on average before a valid proof of work is generated. </p>
<p> This is where a lot of controversy arises with BitCoin. On average the PoW to add a block to the BitCoin blockchain takes around 10 minutes to process for each new BitCoin mined. The cost in electricity is ~$39, or enough to power a home for a week. Bitcoin&#39;s current estimated annual electricity consumption 28.48(TWh) </p>
<p> Some say this is a huge waste of resource.</p>
<p> Let’s say we want to do a Proof of Work on the simple phrase “Hello World!”. Our target is to find a variation of the hash using SHA-256 such that the hash created begins with ‘0000’. We vary the string “Hello World!” by adding an integer value to the end. This integer value is called the <strong>Nonce</strong> (remember from above), and on each failed attempt to create the desired hash we increment the nonce and try hash the string again. In the example below finding a hash value for “Hello World!” took 4251 attempts.</p>
<p><img style="max-width: 100%; max-height: 480px; display: block; margin-left: auto; margin-right: auto;" src="f88f0c7adbb4df402328f3231f961991.iix" width="709" height="143" /></p>
<p>So looking at the code to create the hash, we basically concatenate all the fields we want in the block, including or audit log (this.data) and the hash of the previous block and apply the hashing algorithm.</p>
<pre class="language-javascript"><code>calculateHash() {
      return SHA256(this.index &#43; this.previousHash &#43; this.timestamp &#43; JSON.stringify(this.data) &#43; this.nonce).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !&#61;&#61; Array(difficulty &#43; 1).join(&#34;0&#34;)) {
        this.nonce&#43;&#43;;
        this.hash &#61; this.calculateHash();
    }

    console.log(&#34;BLOCK MINED: &#34; &#43; this.hash
</code></pre>
<p> </p>
<p>The while loop above loops until you have the correct number of zeros (4) at the start of the hash string.</p>
<p>This is a very simple example but similar to how BitCoin works. BitCoin constantly reviews the difficulty and adjusts it every 12 days to ensure that is takes roughly 10 minutes to mine a BitCoin (solve the puzzle).</p>
<p>So what have we accomplished so far?</p>
<ul><li>We have defined our audit log record as a JSON document.</li><li>We have discovered what the blockchain should look like.</li><li>We have decided what our block in the blockchain should look like.</li><li>We have written simple JavaScript to create a block.</li><li>We have also written the code to encrypt the block and ensure it has the necessary proof of work.</li></ul>
<p>So really there is just creating the chain and adding blocks. The code below covers this and is included for completeness</p>
<p><span style="text-decoration: underline;">Warning! I am a novice programmer so take this code with a bit of caution but enjoy none the less.</span></p>
<pre class="language-javascript"><code>const SHA256 &#61; require(&#34;crypto-js/sha256&#34;);

class Block {
  constructor(index, timestamp, data, previousHash &#61; &#39;&#39;) {
    this.index &#61; index;
    this.previousHash &#61; previousHash;
    this.timestamp &#61; timestamp;
    this.data &#61; data;
    this.hash &#61; this.calculateHash();
    this.nonce &#61; 0;
    this.type &#61; &#34;BLOCK&#34;;  
  }

  calculateHash() {
      return SHA256(this.index &#43; this.previousHash &#43; this.timestamp &#43; JSON.stringify(this.data) &#43; this.nonce).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !&#61;&#61; Array(difficulty &#43; 1).join(&#34;0&#34;)) {
        this.nonce&#43;&#43;;
        this.hash &#61; this.calculateHash();
    }

    console.log(&#34;BLOCK MINED: &#34; &#43; this.hash);
  }
} //end class Block /////////////

class Blockchain{
    constructor() {
        this.chain &#61; [this.createGenesisBlock()];
        this.difficulty &#61; 5;
    }

    createGenesisBlock() {
        return new Block(0, Date.now(), &#34;Genesis block&#34;, &#34;0&#34;);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash &#61; this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        
}

    calculateMerkl() {
        var hashString &#61;&#34;&#34;;
        for (let i &#61; 1; i &lt; this.chain.length; i&#43;&#43;){
            const currentBlock &#61; this.chain[i];
            hashString &#61; hashString &#43; currentBlock.hash;
        }
        console.log(JSON.stringify(hashString));

        return SHA256(hashString).toString();
    }
    
    isChainValid() {
        for (let i &#61; 1; i &lt; this.chain.length; i&#43;&#43;){
            const currentBlock &#61; this.chain[i];
            const previousBlock &#61; this.chain[i - 1];

            if (currentBlock.hash !&#61;&#61; currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !&#61;&#61; previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
} //End class Blockchain  /////////////

</code></pre>