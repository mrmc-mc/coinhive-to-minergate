const CoinHive = require('coin-hive');
(async () => {
  const miner = await CoinHive('messifrd7@gmail.com', {
    pool: {
      host: 'xmr.pool.minergate.com',
      port: 45700,
      pass: 'x' // default 'x' if not provided
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();
