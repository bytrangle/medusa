import { ArrayNotEmpty, IsString } from "class-validator"
import { Request, Response } from "express"
import { EntityManager } from "typeorm"

import ProductCollectionService from "../../../../services/product-collection"

/**
 * @oas [post] /collections/{id}/products/batch
 * operationId: "PostProductsToCollection"
 * summary: "Updates products associated with a Product Collection"
 * description: "Updates products associated with a Product Collection"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         required:
 *           - product_ids
 *         properties:
 *           product_ids:
 *             description: "An array of Product IDs to add to the Product Collection."
 *             type: array
 *             items:
 *               description: "The ID of a Product to add to the Product Collection."
 *               type: string
 * tags:
 *   - Collection
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          properties:
 *            collection:
 *              $ref: "#/components/schemas/product_collection"
 */
export default async (req: Request, res: Response) => {
  const { id } = req.params
  const { validatedBody } = req as {
    validatedBody: AdminPostProductsToCollectionReq
  }

  const productCollectionService: ProductCollectionService = req.scope.resolve(
    "productCollectionService"
  )

  const manager: EntityManager = req.scope.resolve("manager")
  const collection = await manager.transaction(async (transactionManager) => {
    return await productCollectionService
      .withTransaction(transactionManager)
      .addProducts(id, validatedBody.product_ids)
  })

  res.status(200).json({ collection })
}

export class AdminPostProductsToCollectionReq {
  @ArrayNotEmpty()
  @IsString({ each: true })
  product_ids: string[]
}
