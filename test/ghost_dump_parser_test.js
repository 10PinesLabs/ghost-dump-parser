const { suite, test, assert } = require('@pmoo/testy');
const { GhostDumpParser } = require('../src/ghost_dump_parser.js');

suite('Ghost dump parser', () => {
  test('it reads author names in the order they appear on the list', () => {
    const data = {
      db: [
        {
          data: {
            users: [
              { name: 'Lionel Messi' },
              { name: 'Ángel Di María' }
            ]
          }
        }
      ]
    }
    const parser = new GhostDumpParser(data)
    assert.that(parser.userNames()).isEqualTo(['Lionel Messi', 'Ángel Di María'])
  });
});
