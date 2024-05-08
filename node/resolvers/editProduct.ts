import { ProductInput } from '../typings/custom'

interface EditProductArg {
    sku: string
    prod: ProductInput
}

export const editProduct = (
    _: any,
    { sku, prod }: EditProductArg,
    { clients: { product: productsClient } }: Context
) => productsClient.updateProduct(sku, prod)
