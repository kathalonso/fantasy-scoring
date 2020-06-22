const describe = require('mocha').describe
const expect = require('chai').expect
const it = require('mocha').it
const calculateScore = require('./attempt')

describe('calculateScore', () => {
    it('returns the score for a quarterback', () => {
      const player = {
        name: 'Patrick Mahomes',
        position: 'QB',
        team: 'Kansas City',
        stats: {
          passing: {attempts: 25, completions: 18, yards: 363, touchdowns: 3, interceptions: 0},
          rushing: { attempts: 3, yards: 22, touchdowns: 1, fumbles: 0 }
        }
      }
            // passing.yards / 25 * 1, passing.touchdowns * 6, passing.interceptions * -3 
            // rushing.yards / 10, rushing.touchdowns * 6, rushing.fumbles * -3


      const score = calculateScore(player)

      expect(score).to.equal(40.72)
    })

    it('returns the score for a running back', () => {
      const player = {
        name: 'LeSean McCoy',
        position: 'RB',
        team: 'Buffalo',
        stats: {
          rushing: { attempts: 18, yards: 103, touchdowns: 2, fumbles: 0 },
          receiving: { receptions: 6, yards: 37, touchdowns: 0, fumbles: 0 },
          return: {
            kickreturn: { returns: 0, yards: 0, touchdowns: 0, fumbles: 0 },
            puntreturn: { returns: 0, yards: 0, touchdowns: 0, fumbles: 0 },
          },
        }
      }

      const score = calculateScore(player)

      expect(score).to.equal(32)
    })

    it('returns the score for a receiver', () => {
      const player = {
        name: 'Tyler Lockett',
        position: 'WR',
        team: 'Seattle',
        WRstats: {
          rushing: { attempts: 0, yards: 0, touchdowns: 0, fumbles: 0 },
          receiving: { receptions: 6, yards: 91, touchdowns: 1, fumbles: 0 },
          return: {
            kickreturn: { returns: 2, yards: 16, touchdowns: 0, fumbles: 1 },
            puntreturn: { returns: 3, yards: 107, touchdowns: 1, fumbles: 0 },
          },
        }
      }

      const score = calculateScore(player)

      expect(score).to.equal(32.3)
    })

    it('returns the score for a tightend', () => {
      const player = {
        name: 'Rob Gronkowski',
        position: 'TE',
        team: 'New England',
        stats: {
          receiving: { receptions: 8, yards: 137, touchdowns: 2, fumbles: 0 },
      }
    }

    const score = calculateScore(player)

    expect(score).to.equal(33.7)
  })

    it('returns 0 when position is unknown', () => {
      const player = {
        name: 'Robbie Gould',
        position: 'K',
        team: 'San Francisco',
        stats: {
          fieldgoals: { attempts: 3, made: 2 },
          xp: { attempts: 2, made: 2 }
        }
      }

      const score = calculateScore(player)

    expect(score).to.equal(0)
    })
  
})
