import type { Landing } from '$lib/types/landing';
import { mapJsonBlock, type Section } from '$lib/types/blocks';

import landingJson from './landing.json'

const landing:Landing = {
  headerPhoto: landingJson.headerPhoto,
  sections: landingJson.sections.map( lj => {
    const s:Section = {
      header: lj.header,
      columnCount: lj.columnCount,
    }
    if(lj.blocks) {
      s.blocks = lj.blocks.map( bj => {
        //@ts-ignore
        const b:Block = mapJsonBlock(bj)
        return b
      })
    }
    return s
  })
}


export default landing