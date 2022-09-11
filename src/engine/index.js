import { CALL_SIGN, LOSER_MODE, WINNER_MODE, PLAYER_VS_PLAYER } from '../types/constants'
import { Player, Damage } from '../types/engine'

class TitanEngine {
    constructor(player: Player, damage: Damage, game) {
        this.game = game
        this.player = player
        this.timer = {
            specialMode: 0
        }
    }
}
