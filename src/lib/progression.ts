// @ts-ignore
import fs from 'fs'
import { createReadStream } from 'fs';
import parse from 'csv-parse'
// @ts-ignore
import { PLAYER_VS_PLAYER, WINNER_MODE  } from '../types/constants'
import { Player, Damage } from '../types/engine'


const results = []

const playerProgression = (player: Player, data: Object) => {
    const stream = createReadStream('./data/gundam.csv')
        .on('data',(data) => {

        })
    return data
}

const playerRankProgression = ( player: Player, data: Object) => {
    return "Player rank increased"
}

const playerAbilityProgression = () => {
    return "Player Ability improved"
}


