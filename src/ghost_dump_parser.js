class GhostDumpParser {
  constructor(data) {
    this._data = data
  }

  userNames() {
    return this._db().users.map(u => u.name)
  }

  allImageUrls() {
    return this._db().posts.map(p => p.feature_image).filter(i => i !== null)
  }

  postsCount() {
    return this._db().posts.length
  }

  _db() {
    return this._data.db[0].data
  }
}

module.exports = { GhostDumpParser }
