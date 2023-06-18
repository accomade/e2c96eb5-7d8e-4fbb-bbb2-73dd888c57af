import type { Photo, PhotoGallery } from './photos'
import type { Calendar, CalendarAvailable } from './calendar'
import type { Maps } from './maps'
import type { Weather } from './weather'
import { 
  type AccoCard, 
  type Amneties, 
  type AmnetiesCore, 
  type Pricing, 
  type JsonPricing,
  type PricingShort,
  type JsonPricingShort,
  mapJsonPricing,
  mapJsonPricingShort
} from './accos'

export interface Section {
  header?: string | undefined
  columnCount?: number | undefined
  maxWidth?: string
  blocks?: Block[]
}

export interface TextBlock {
  kind: 'text'
  content: {
    ref: string
  }
}

export interface PhotoBlock {
  kind: 'photo'
  content: Photo
}

export interface PhotoGalleryBlock {
  kind: 'photo-gallery'
  content: PhotoGallery
}

export interface CalendarBlock {
  kind: 'calendar'
  content: Calendar
}

export interface CalendarAvailableBlock {
  kind: 'calendar-available'
  content: CalendarAvailable
}


export interface MapBlock {
  kind: 'map'
  content: Maps
}

export interface PricingBlock {
  kind: 'pricing'
  content: Pricing
}

export interface JsonPricingBlock {
  kind: 'pricing'
  content: JsonPricing
}

export interface PricingShortBlock {
  kind: 'pricing-short'
  content: PricingShort
}

export interface JsonPricingShortBlock {
  kind: 'pricing-short'
  content: JsonPricingShort
}

export interface WeatherBlock {
  kind: 'weather'
  content: Weather
}

export interface AmnetiesBlock {
  kind: 'amneties'
  content: {
    amneties: Amneties
  }
}

export interface AmnetiesCoreBlock {
  kind: 'amneties-core'
  content: {
    core: AmnetiesCore
  }
}

export interface AccoCardBlock {
  kind: 'acco-card'
  content: AccoCard
}

export type Block =
  TextBlock |
  PhotoBlock | 
  PhotoGalleryBlock | 
  CalendarBlock |
  CalendarAvailableBlock |
  PricingBlock |
  PricingShortBlock |
  AmnetiesBlock |
  AmnetiesCoreBlock |
  WeatherBlock |
  MapBlock |
  AccoCardBlock |
  undefined

export type JsonBlock = 
  TextBlock |
  PhotoBlock |
  PhotoGalleryBlock |
  CalendarBlock |
  CalendarAvailableBlock |
  JsonPricingBlock |
  JsonPricingShortBlock |
  AmnetiesBlock |
  AmnetiesCoreBlock |
  WeatherBlock |
  AccoCardBlock |
  undefined


export const mapJsonBlock = (jb:JsonBlock):Block => {
  if(jb == undefined) return undefined

  if(jb.kind == 'pricing') {
    return {
      kind: 'pricing',
      content: mapJsonPricing(jb.content)
    }
  }
  if(jb.kind == "pricing-short") {
    return {
      kind: 'pricing-short',
      content: mapJsonPricingShort(jb.content)
    }
  }
  
  return jb
}