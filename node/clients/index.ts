import { IOClients } from '@vtex/api'

import { BookClient } from './book'
import { ProductClient } from './product/product'
import { MarkdownClient } from './markdown'

export class Clients extends IOClients {
  public get book() {
    return this.getOrSet('book', BookClient)
  }

  public get markdown() {
    return this.getOrSet('markdown', MarkdownClient)
  }

  public get product() {
    return this.getOrSet('product', ProductClient)
  }
}
