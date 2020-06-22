function calculateScore(player) {
  switch(player.position) {
      case 'QB':
        const qbScore = 
        (player.stats.passing.yards / 25 * 1) + (player.stats.passing.touchdowns * 6) + (player.stats.passing.interceptions * -3) +
        (player.stats.rushing.yards / 10) + (player.stats.rushing.touchdowns * 6) + (player.stats.rushing.fumbles * -3)
        return qbScore 
      
          // const passingYards = 
          //     player.stats.passing.yards / 25 * 1
          // const passingTouchdowns = 
          //     player.stats.passing.touchdowns * 6 
          // const passingInterceptions =
          //     player.stats.passing.interceptions * -3
          // const rushingYards = 
          //     player.stats.rushing.yards / 10
          // const rushingTouchdowns = 
          //     player.stats.rushing.touchdowns * 6
          // const rushingFumbles =
          //     player.stats.rushing.fumbles * -3

          // const qbScore = passingYards + passingTouchdowns + passingInterceptions + rushingYards + rushingTouchdowns + rushingFumbles
          // return qbScore

          //no need for 'break', 'return' sufficient 
      
      case 'RB':
        const rbScore = 
        (player.stats.rushing.yards / 10 * 1) + (player.stats.rushing.touchdowns * 6) + (player.stats.rushing.fumbles * -3) +
        (player.stats.receiving.receptions * 1) + (player.stats.receiving.yards / 10 * 1) + (player.stats.receiving.touchdowns * 6) +
        (player.stats.receiving.fumbles * -3) + (player.stats.return.kickreturn.yards / 15 * 1) + (player.stats.return.kickreturn.touchdowns * 6) +
        (player.stats.return.kickreturn.fumbles * -3) + (player.stats.return.puntreturn.yards / 15 * 1) + (player.stats.return.puntreturn.touchdowns * 6)+
        (player.stats.return.puntreturn.fumbles * -3)
        return rbScore

  

      case 'WR':
        const wrScore = 
        (player.WRstats.rushing.yards / 10 * 1) + (player.WRstats.rushing.touchdowns * 6) + (player.WRstats.rushing.fumbles * -3) +
        (player.WRstats.receiving.receptions * 1) + (player.WRstats.receiving.yards / 10 * 1) + (player.WRstats.receiving.touchdowns * 6) +
        (player.WRstats.receiving.fumbles * -3) + (player.WRstats.return.kickreturn.yards / 15 * 1) + (player.WRstats.return.kickreturn.touchdowns * 6) +
        (player.WRstats.return.kickreturn.fumbles * -3) + (player.WRstats.return.puntreturn.yards / 15 * 1) + (player.WRstats.return.puntreturn.touchdowns * 6 )+
        (player.WRstats.return.puntreturn.fumbles * -3)
        return wrScore


      case 'TE':
        const teScore =
          (player.stats.receiving.receptions * 1) + (player.stats.receiving.yards / 10 * 1) + 
          (player.stats.receiving.touchdowns * 6) + (player.stats.receiving.fumbles * -3)
      return teScore


      case 'K':
        
        return 0 


}
}

module.exports = calculateScore