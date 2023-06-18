
export interface Photo {
  photoPath: string,
  alt: string,
  attribution?: string,
  link?: string,
  external?: boolean,
  height?: string|undefined
  ratio?: string|undefined
  width?: string|undefined
}

export interface GridPhoto {
  photo: Photo,
  zoomed: boolean,
  id: string,
}

export interface PhotoGallery {
  gridPhotoWidth?: number;
  photos: Photo[]
} 