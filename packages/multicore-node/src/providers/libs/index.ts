class LibProvider {
  libs = {
    BTC: {
      lib: require('multicore-lib'),
      p2p: require('multicore-p2p')
    }
  };

  register(chain: string, lib: string, p2p: string) {
    this.libs[chain] = { lib: require(lib), p2p: require(p2p) };
  }

  get(chain) {
    return this.libs[chain];
  }
}

export const Libs = new LibProvider();
