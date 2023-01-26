class GhostDumpParser {
  constructor(data) {
    this._data = data
  }

  userNames() {
    return this._db().users.map(u => u.name)
  }

  _db() {
    return this._data.db[0].data
  }
}

module.exports = { GhostDumpParser }
