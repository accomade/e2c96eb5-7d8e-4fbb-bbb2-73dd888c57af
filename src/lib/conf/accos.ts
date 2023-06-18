import type { Acco } from '$lib/types/accos';
import { mapJsonBlock, type Block, type Section } from '$lib/types/blocks';
import accosJson from './accos.json'

//let basePath:string='prev/users/template1'

const accos:Acco[] = accosJson.map( (aj) => {
  const a:Acco = {
    displayName: aj.displayName,
    path: aj.path
  }
  a.cardContent = {
    coverPhoto: aj.cardContent.coverPhoto,
    slug: aj.cardContent.slug,
    blocks: aj.cardContent.blocks.map( bj => {
      //@ts-ignore
      const b:Block = mapJsonBlock(bj)
      return b;
    }),
  }
  
  
  a.siteContent = aj.siteContent.map( sj => {
    const s:Section = {
      header: sj.header,
      columnCount: sj.columnCount,
    }
    if(sj.blocks) {
      s.blocks = sj.blocks.map(bj => {
        //@ts-ignore
        const b:Block = mapJsonBlock(bj)
        //console.log(bj)
        return b;
      })
    }

    return s 
  })
  return a
});
export default accos;

