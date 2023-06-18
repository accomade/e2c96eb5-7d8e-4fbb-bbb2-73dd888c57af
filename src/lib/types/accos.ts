import type { Section, Block } from './blocks'
import type { DateTime } from 'luxon'
import { DateTime as luxon } from 'luxon'
import type { Dinero } from 'dinero.js'
import { dinero } from 'dinero.js'
import type { Photo } from './photos'


export type PricingColumn = 
  | 'timeRange'
  | 'firstNight'
  | 'eachNight'
  | 'extraPerson'
  | 'minNumNights'
  

export type PricingEntry = {
  kind: 'entry',
  firstNightPrice?: Dinero<number>
  perNightPrice: Dinero<number>
  
  minNumberOfNights?: number
  
  additionalPersonPrice1?: Dinero<number>
  additionalPersonPrice2?: Dinero<number>
  additionalPersonPrice3?: Dinero<number>

  additionalPersonText1?: string
  additionalPersonText2?: string
  additionalPersonText3?: string
}

export type JsonDinero = {
  amount: number
  currency: {
    code: string
    base: number
    exponent: number
  }
}

export type JsonPricingEntry = {
  kind: 'entry',
  firstNightPrice?: JsonDinero
  perNightPrice: JsonDinero
  
  minNumberOfNights?: number
  
  additionalPersonPrice1?: JsonDinero
  additionalPersonPrice2?: JsonDinero
  additionalPersonPrice3?: JsonDinero

  additionalPersonText1?: string
  additionalPersonText2?: string
  additionalPersonText3?: string
}

export const mapJsonPricingEntry = (jp:JsonPricingEntry):PricingEntry => {
  const p:PricingEntry = {
    kind: jp.kind,
    perNightPrice: dinero(jp.perNightPrice),
    additionalPersonText1: jp.additionalPersonText1,
    additionalPersonText2: jp.additionalPersonText2,
    additionalPersonText3: jp.additionalPersonText3,
    minNumberOfNights: jp.minNumberOfNights,

  }
  if(jp.additionalPersonPrice1) p.additionalPersonPrice1 = dinero(jp.additionalPersonPrice1)
  if(jp.additionalPersonPrice2) p.additionalPersonPrice2 = dinero(jp.additionalPersonPrice2)
  if(jp.additionalPersonPrice3) p.additionalPersonPrice3 = dinero(jp.additionalPersonPrice3)
  if(jp.firstNightPrice) p.firstNightPrice = dinero(jp.firstNightPrice)
  return p
}

export interface PricingRange {
  kind: 'range'
  from?: DateTime
  to?: DateTime
  entry?: PricingEntry
}

export interface JsonPricingRange {
  kind: 'range',
  from?: string,
  to?: string,
  entry?: JsonPricingEntry
}

export const mapJsonPricingRange = (jp:JsonPricingRange):PricingRange => {
  const pr:PricingRange = {
    kind: jp.kind,
  }
  if(jp.from) pr.from = luxon.fromISO(jp.from,{zone:'utc'})
  if(jp.to) pr.to = luxon.fromISO(jp.to,{zone:'utc'})
  if(jp.entry) pr.entry = mapJsonPricingEntry(jp.entry)

  return pr
}

export interface Pricing {
  global?: PricingEntry
  columns?: PricingColumn[]
  entries?: PricingRange[]
  footnote?: string
}

export interface JsonPricing {
  global?: JsonPricingEntry
  columns?: PricingColumn[]
  entries?: JsonPricingRange[]
  footnote?: string
}

export const mapJsonPricing = (jp: JsonPricing): Pricing => {
  const p:Pricing = {
    columns: jp.columns,
    footnote: jp.footnote,
  }
  if(jp.entries) p.entries = jp.entries.map( e => mapJsonPricingRange(e))

  if(jp.global) p.global = mapJsonPricingEntry(jp.global)

  return p
}

export interface PricingShort {
  global?: PricingEntry
  entries?: PricingRange[]
  showMaximum?: boolean
  showMinimum?: boolean
  footnote?: string
}

export interface JsonPricingShort {
  global?: JsonPricingEntry
  entries?: JsonPricingRange[]
  showMaximum?: boolean
  showMinimum?: boolean
  footnote?: string
}

export const mapJsonPricingShort = (jp:JsonPricingShort):PricingShort => {
  const p:PricingShort = {
    showMaximum: jp.showMaximum,
    showMinimum: jp.showMinimum,
    footnote: jp.footnote
  }
  if(jp.global) p.global = mapJsonPricingEntry(jp.global)
  if(jp.entries) p.entries = jp.entries.map(e => mapJsonPricingRange(e))

  return p
}

export type CoffeeMachine = 
  | 'nespresso'
  | 'beans'
  | 'portafilter'
  | 'filter'
  | 'capsules'
  | 'none'

export type BedKind = 'kings' | 'queens' | 'solo' | 'bunkbed' | 'baby' | 'sleepingSofa'

export type BedSpec = {
  kind: BedKind
  optional?: boolean
  heads: number
}

export interface Beds {
  specs: BedSpec[]
}


export type AmnetyNucleusType = 'longDesc' | 'string' | 'check' | 'checkWithDesc' | 'list' | 'numValue' | 'beds' | 'size' | 'seats' | 'coffeeMachine'


export interface Amneties {
  size?: number
  
  descriptions?: LabeledDesc[]
  sections: AmnetiesSection[]

  rooms: RoomsSection[]
  outdoors: OutdoorsSection[]
}


export interface AmnetiesSection {
  header?: string
  hr?: boolean
  specs: AmnetyNucleusSpec[]
}

export interface RoomsSection {
  header: string
  specs: AmnetyNucleusSpec[]
  desc?: string
}

export interface OutdoorsSection {
  header: string
  specs: AmnetyNucleusSpec[]
  desc?: string
}


export interface AmnetyNucleusSpec {
  label?: string
  kind: AmnetyNucleusType
  value?: boolean | number | string | Beds | CoffeeMachine[] | undefined
  desc?: string
}


export interface AmnetiesCore {
  peopleMin: number
  peopleMax: number
  size: number
  bedRooms: number
  bathRooms: number
  pets: boolean
  wifi: boolean
  smoking: boolean
  ac: boolean
  tv: boolean
  parking: boolean

}

export interface LabeledDesc {
  label: string
  desc: string
}

export interface AccoCard {
  cardContent: AccoCardContent
  displayName: string
}

export interface AccoCardContent {
  coverPhoto: Photo
  slug: string
  blocks: Block[]
}

export interface Acco {
  path: string
  displayName: string
  cardContent?: AccoCardContent
  siteContent?: Section[] 
}