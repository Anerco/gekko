import cache from '../state/cache';
const manager = cache.get('apiKeyManager');

export default {
  *get() {
    this.body = manager.get();
  },
  *add() {
    const content = this.request.body;

    manager.add(content.exchange, content.values);

    this.body = {
      status: 'ok',
    };
  },
  *remove() {
    const exchange = this.request.body.exchange;

    manager.remove(exchange);

    this.body = {
      status: 'ok',
    };
  },
};
