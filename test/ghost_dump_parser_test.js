const { suite, test, assert } = require('@pmoo/testy');
const { GhostDumpParser } = require('../src/ghost_dump_parser.js');

const dbWithData = data => {
  return { db: [ { data } ] }
}

suite('Ghost dump parser', () => {
  test('it reads author names in the order they appear on the list', () => {
    const data = dbWithData({
      users: [
        { name: 'Lionel Messi' },
        { name: 'Ángel Di María' }
      ]
    })
    const parser = new GhostDumpParser(data)
    assert.that(parser.userNames()).isEqualTo(['Lionel Messi', 'Ángel Di María'])
  });

  test('it reads featured image URLs from the posts section', () => {
    const data = dbWithData({
      posts: [
        { feature_image: 'https://example.org/1' },
        { feature_image: 'https://example.org/2' },
      ]
    })
    const parser = new GhostDumpParser(data)
    assert.that(parser.allImageUrls()).isEqualTo(['https://example.org/1', 'https://example.org/2'])
  });

  test('it skips null featured image URLs from the posts section', () => {
    const data = dbWithData({
      posts: [
        { feature_image: 'https://example.org/1' },
        { feature_image: null },
      ]
    })
    const parser = new GhostDumpParser(data)
    assert.that(parser.allImageUrls()).isEqualTo(['https://example.org/1'])
  });
});
