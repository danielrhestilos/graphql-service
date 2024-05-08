export interface Book {
  authors: string[]
  cacheId?: string
  id: string
  name: string
}

export interface BookInput {
  name: Book['name']
  authors: Book['authors']
}

export type Maybe<T> = T | void

export interface ProductInput {
  MetaTagDescription: string
  Name: string
  Title: string
}

export interface Product {
  Id: number
  Name: string
  DepartmentId: number
  CategoryId: number
  BrandId: number
  LinkId: string
  RefId: any
  IsVisible: boolean
  Description: any
  DescriptionShort: any
  ReleaseDate: any
  KeyWords: any
  Title: string
  IsActive: boolean
  TaxCode: any
  MetaTagDescription: string
  SupplierId: any
  ShowWithoutStock: boolean
  AdWordsRemarketingCode: any
  LomadeeCampaignCode: any
  Score: any
}
