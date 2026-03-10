// node.js built-in modules
const assert = require('node:assert')

// npm modules
const fixtures = require('haraka-test-fixtures')

// start of tests
//    assert: https://nodejs.org/api/assert.html
//    mocha: http://mochajs.org

beforeEach(function () {
    this.plugin = new fixtures.plugin('recipient-routes-probe')
})

describe('recipient-routes-probe', function () {
    it('loads', function () {
        assert.ok(this.plugin)
    })
})

describe('load-recipient-routes-probe.ini', function () {
    it('loads recipient-routes-probe.ini from config/recipient-routes-probe.ini', function () {
        this.plugin.load_config()
        assert.ok(this.plugin.cfg)
    })

    it('initializes enabled boolean', function () {
        this.plugin.load_config()
        assert.equal(this.plugin.cfg.cache.enabled, true, this.plugin.cfg)
    })
})

describe('uses text fixtures', function () {
    it('sets up a connection', function () {
        this.connection = fixtures.connection.createConnection({})
        assert.ok(this.connection.server)
    })

    it('sets up a transaction', function () {
        this.connection = fixtures.connection.createConnection({})
        this.connection.init_transaction()
        assert.ok(this.connection.transaction.header)
    })
})
