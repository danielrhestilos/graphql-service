import { Catalog, Product } from '@vtex/clients'
import { ProductInput } from '../../typings/custom';

export class ProductClient extends Catalog {
    public async updateProduct(refId: any, data: ProductInput) {
        const targetProduct: any = await this.http.get(
            `/api/catalog/pvt/stockkeepingunit?refId=${refId}`,
            {
                headers: { VtexIdclientAutCookie: this.context.authToken },
            }
        )
        const { ProductId } = targetProduct;

        const catalogProduct = await this.http.get<Product>(
            `/api/catalog/pvt/product/${ProductId}`,
            {
                headers: { VtexIdclientAutCookie: this.context.authToken },
            }
        )

        const rp = await this.http.put<Product[]>(
            `/api/catalog/pvt/product/${ProductId}`,
            { ...catalogProduct, Name: data.Name, Title: data.Title, MetaTagDescription: data.MetaTagDescription }
            , {
                headers: { VtexIdclientAutCookie: this.context.authToken },
            }
        )

        return rp
    }
}