# Class: ReturnService

## Hierarchy

- `TransactionBaseService`

  ↳ **`ReturnService`**

## Constructors

### constructor

• **new ReturnService**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `InjectedDependencies` |

#### Overrides

TransactionBaseService.constructor

#### Defined in

[packages/medusa/src/services/return.ts:64](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L64)

## Properties

### \_\_configModule\_\_

• `Protected` `Optional` `Readonly` **\_\_configModule\_\_**: `Record`<`string`, `unknown`\>

#### Inherited from

TransactionBaseService.\_\_configModule\_\_

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:10](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/interfaces/transaction-base-service.ts#L10)

___

### \_\_container\_\_

• `Protected` `Readonly` **\_\_container\_\_**: `any`

#### Inherited from

TransactionBaseService.\_\_container\_\_

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:9](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/interfaces/transaction-base-service.ts#L9)

___

### fulfillmentProviderService\_

• `Protected` `Readonly` **fulfillmentProviderService\_**: [`FulfillmentProviderService`](FulfillmentProviderService.md)

#### Defined in

[packages/medusa/src/services/return.ts:59](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L59)

___

### inventoryService\_

• `Protected` `Readonly` **inventoryService\_**: [`InventoryService`](InventoryService.md)

#### Defined in

[packages/medusa/src/services/return.ts:61](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L61)

___

### lineItemService\_

• `Protected` `Readonly` **lineItemService\_**: [`LineItemService`](LineItemService.md)

#### Defined in

[packages/medusa/src/services/return.ts:56](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L56)

___

### manager\_

• `Protected` **manager\_**: `EntityManager`

#### Overrides

TransactionBaseService.manager\_

#### Defined in

[packages/medusa/src/services/return.ts:50](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L50)

___

### orderService\_

• `Protected` `Readonly` **orderService\_**: [`OrderService`](OrderService.md)

#### Defined in

[packages/medusa/src/services/return.ts:62](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L62)

___

### returnItemRepository\_

• `Protected` `Readonly` **returnItemRepository\_**: typeof `ReturnItemRepository`

#### Defined in

[packages/medusa/src/services/return.ts:55](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L55)

___

### returnReasonService\_

• `Protected` `Readonly` **returnReasonService\_**: [`ReturnReasonService`](ReturnReasonService.md)

#### Defined in

[packages/medusa/src/services/return.ts:60](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L60)

___

### returnRepository\_

• `Protected` `Readonly` **returnRepository\_**: typeof `ReturnRepository`

#### Defined in

[packages/medusa/src/services/return.ts:54](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L54)

___

### shippingOptionService\_

• `Protected` `Readonly` **shippingOptionService\_**: [`ShippingOptionService`](ShippingOptionService.md)

#### Defined in

[packages/medusa/src/services/return.ts:58](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L58)

___

### taxProviderService\_

• `Protected` `Readonly` **taxProviderService\_**: [`TaxProviderService`](TaxProviderService.md)

#### Defined in

[packages/medusa/src/services/return.ts:57](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L57)

___

### totalsService\_

• `Protected` `Readonly` **totalsService\_**: [`TotalsService`](TotalsService.md)

#### Defined in

[packages/medusa/src/services/return.ts:53](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L53)

___

### transactionManager\_

• `Protected` **transactionManager\_**: `undefined` \| `EntityManager`

#### Overrides

TransactionBaseService.transactionManager\_

#### Defined in

[packages/medusa/src/services/return.ts:51](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L51)

## Methods

### atomicPhase\_

▸ `Protected` **atomicPhase_**<`TResult`, `TError`\>(`work`, `isolationOrErrorHandler?`, `maybeErrorHandlerOrDontFail?`): `Promise`<`TResult`\>

Wraps some work within a transactional block. If the service already has
a transaction manager attached this will be reused, otherwise a new
transaction manager is created.

#### Type parameters

| Name |
| :------ |
| `TResult` |
| `TError` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `work` | (`transactionManager`: `EntityManager`) => `Promise`<`TResult`\> | the transactional work to be done |
| `isolationOrErrorHandler?` | `IsolationLevel` \| (`error`: `TError`) => `Promise`<`void` \| `TResult`\> | the isolation level to be used for the work. |
| `maybeErrorHandlerOrDontFail?` | (`error`: `TError`) => `Promise`<`void` \| `TResult`\> | Potential error handler |

#### Returns

`Promise`<`TResult`\>

the result of the transactional work

#### Inherited from

TransactionBaseService.atomicPhase\_

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:50](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/interfaces/transaction-base-service.ts#L50)

___

### cancel

▸ **cancel**(`returnId`): `Promise`<`Return`\>

Cancels a return if possible. Returns can be canceled if it has not been received.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnId` | `string` | the id of the return to cancel. |

#### Returns

`Promise`<`Return`\>

the updated Return

#### Defined in

[packages/medusa/src/services/return.ts:172](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L172)

___

### create

▸ **create**(`data`): `Promise`<`Return`\>

Creates a return request for an order, with given items, and a shipping
method. If no refund amount is provided the refund amount is calculated from
the return lines and the shipping cost.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `CreateReturnInput` | data to use for the return e.g. shipping_method,    items or refund_amount |

#### Returns

`Promise`<`Return`\>

the created return

#### Defined in

[packages/medusa/src/services/return.ts:350](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L350)

___

### fulfill

▸ **fulfill**(`returnId`): `Promise`<`Return`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnId` | `string` |

#### Returns

`Promise`<`Return`\>

#### Defined in

[packages/medusa/src/services/return.ts:496](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L496)

___

### getFulfillmentItems

▸ `Protected` **getFulfillmentItems**(`order`, `items`, `transformer`): `Promise`<`LineItem` & { `note?`: `string` ; `reason_id?`: `string`  }[]\>

Retrieves the order line items, given an array of items

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | `Order` | the order to get line items from |
| `items` | `OrdersReturnItem`[] | the items to get |
| `transformer` | `Transformer` | a function to apply to each of the items    retrieved from the order, should return a line item. If the transformer    returns an undefined value the line item will be filtered from the    returned array. |

#### Returns

`Promise`<`LineItem` & { `note?`: `string` ; `reason_id?`: `string`  }[]\>

the line items generated by the transformer.

#### Defined in

[packages/medusa/src/services/return.ts:114](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L114)

___

### list

▸ **list**(`selector`, `config?`): `Promise`<`Return`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `Selector`<`Return`\> | the query object for find |
| `config` | `FindConfig`<`Return`\> | the config object for find |

#### Returns

`Promise`<`Return`[]\>

the result of the find operation

#### Defined in

[packages/medusa/src/services/return.ts:154](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L154)

___

### receive

▸ **receive**(`returnId`, `receivedItems`, `refundAmount?`, `allowMismatch?`): `Promise`<`Return`\>

Registers a previously requested return as received. This will create a
refund to the customer. If the returned items don't match the requested
items the return status will be updated to requires_action. This behaviour
is useful in sitautions where a custom refund amount is requested, but the
retuned items are not matching the requested items. Setting the
allowMismatch argument to true, will process the return, ignoring any
mismatches.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `returnId` | `string` | `undefined` | the orderId to return to |
| `receivedItems` | `OrdersReturnItem`[] | `undefined` | the items received after return. |
| `refundAmount?` | `number` | `undefined` | the amount to return |
| `allowMismatch` | `boolean` | `false` | whether to ignore return/received product mismatch |

#### Returns

`Promise`<`Return`\>

the result of the update operation

#### Defined in

[packages/medusa/src/services/return.ts:567](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L567)

___

### retrieve

▸ **retrieve**(`id`, `config?`): `Promise`<`Return`\>

Retrieves a return by its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the return to retrieve |
| `config` | `FindConfig`<`Return`\> | the config object |

#### Returns

`Promise`<`Return`\>

the return

#### Defined in

[packages/medusa/src/services/return.ts:270](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L270)

___

### retrieveBySwap

▸ **retrieveBySwap**(`swapId`, `relations?`): `Promise`<`Return`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `swapId` | `string` | `undefined` |
| `relations` | `string`[] | `[]` |

#### Returns

`Promise`<`Return`\>

#### Defined in

[packages/medusa/src/services/return.ts:291](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L291)

___

### shouldRetryTransaction\_

▸ `Protected` **shouldRetryTransaction_**(`err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Record`<`string`, `unknown`\> \| { `code`: `string`  } |

#### Returns

`boolean`

#### Inherited from

TransactionBaseService.shouldRetryTransaction\_

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:31](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/interfaces/transaction-base-service.ts#L31)

___

### update

▸ **update**(`returnId`, `update`): `Promise`<`Return`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnId` | `string` |
| `update` | `UpdateReturnInput` |

#### Returns

`Promise`<`Return`\>

#### Defined in

[packages/medusa/src/services/return.ts:316](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L316)

___

### validateReturnLineItem

▸ `Protected` **validateReturnLineItem**(`item?`, `quantity?`, `additional?`): `Object`

Checks that a given quantity of a line item can be returned. Fails if the
item is undefined or if the returnable quantity of the item is lower, than
the quantity that is requested to be returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `item?` | `LineItem` | `undefined` | the line item to check has sufficient returnable   quantity. |
| `quantity` | `number` | `0` | the quantity that is requested to be returned. |
| `additional` | `Object` | `{}` | the quantity that is requested to be returned. |
| `additional.note?` | `string` | `undefined` | - |
| `additional.reason_id?` | `string` | `undefined` | - |

#### Returns

`Object`

a line item where the quantity is set to the requested
  return quantity.

| Name | Type |
| :------ | :------ |
| `adjustments?` | (`undefined` \| { id?: string \| undefined; item\_id?: string \| undefined; item?: { cart\_id?: string \| undefined; cart?: { readonly object?: "cart" \| undefined; email?: string \| undefined; billing\_address\_id?: string \| undefined; ... 35 more ...; updated\_at?: { ...; } \| undefined; } \| undefined; ... 34 more ...; updated\_at?: { ...; }...)[] |
| `allow_discounts?` | `boolean` |
| `cart?` | { readonly object?: "cart" \| undefined; email?: string \| undefined; billing\_address\_id?: string \| undefined; billing\_address?: { customer\_id?: string \| null \| undefined; customer?: { ...; } \| ... 1 more ... \| undefined; ... 15 more ...; updated\_at?: { ...; } \| undefined; } \| undefined; ... 34 more ...; updated\_at?: ... |
| `cart_id?` | `string` |
| `claim_order?` | { payment\_status?: ClaimPaymentStatus \| undefined; fulfillment\_status?: ClaimFulfillmentStatus \| undefined; claim\_items?: ({ images?: ({ ...; } \| undefined)[] \| undefined; ... 14 more ...; updated\_at?: { ...; } \| undefined; } \| undefined)[] \| undefined; ... 17 more ...; id?: string \| undefined; } |
| `claim_order_id?` | `string` |
| `created_at?` | { toString?: {} \| undefined; toDateString?: {} \| undefined; toTimeString?: {} \| undefined; toLocaleString?: {} \| undefined; toLocaleDateString?: {} \| undefined; toLocaleTimeString?: {} \| undefined; ... 37 more ...; [Symbol.toPrimitive]?: {} \| undefined; } |
| `description?` | `string` |
| `discount_total?` | ``null`` \| `number` |
| `fulfilled_quantity?` | `number` |
| `gift_card_total?` | ``null`` \| `number` |
| `has_shipping?` | `boolean` |
| `id?` | `string` |
| `is_giftcard?` | `boolean` |
| `is_return?` | `boolean` |
| `metadata?` | { [x: string]: unknown; } |
| `order?` | { readonly object?: "order" \| undefined; status?: OrderStatus \| undefined; fulfillment\_status?: FulfillmentStatus \| undefined; payment\_status?: PaymentStatus \| undefined; ... 47 more ...; updated\_at?: { ...; } \| undefined; } |
| `order_id?` | `string` |
| `original_tax_total?` | ``null`` \| `number` |
| `original_total?` | ``null`` \| `number` |
| `quantity?` | `number` |
| `refundable?` | ``null`` \| `number` |
| `returned_quantity?` | `number` |
| `shipped_quantity?` | `number` |
| `should_merge?` | `boolean` |
| `subtotal?` | ``null`` \| `number` |
| `swap?` | { fulfillment\_status?: SwapFulfillmentStatus \| undefined; payment\_status?: SwapPaymentStatus \| undefined; order\_id?: string \| undefined; ... 20 more ...; updated\_at?: { ...; } \| undefined; } |
| `swap_id?` | `string` |
| `tax_lines?` | (`undefined` \| { item\_id?: string \| undefined; item?: { cart\_id?: string \| undefined; cart?: { readonly object?: "cart" \| undefined; email?: string \| undefined; billing\_address\_id?: string \| undefined; ... 35 more ...; updated\_at?: { ...; } \| undefined; } \| undefined; ... 34 more ...; updated\_at?: { ...; } \| undefined; } \| undefin...)[] |
| `tax_total?` | ``null`` \| `number` |
| `thumbnail?` | ``null`` \| `string` |
| `title?` | `string` |
| `total?` | ``null`` \| `number` |
| `unit_price?` | `number` |
| `updated_at?` | { toString?: {} \| undefined; toDateString?: {} \| undefined; toTimeString?: {} \| undefined; toLocaleString?: {} \| undefined; toLocaleDateString?: {} \| undefined; toLocaleTimeString?: {} \| undefined; ... 37 more ...; [Symbol.toPrimitive]?: {} \| undefined; } |
| `variant?` | { title?: string \| undefined; product\_id?: string \| undefined; product?: { title?: string \| undefined; subtitle?: string \| null \| undefined; description?: string \| null \| undefined; ... 29 more ...; updated\_at?: { ...; } \| undefined; } \| undefined; ... 22 more ...; updated\_at?: { ...; } \| undefined; } |
| `variant_id?` | `string` |

#### Defined in

[packages/medusa/src/services/return.ts:228](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L228)

___

### validateReturnStatuses

▸ `Protected` **validateReturnStatuses**(`order`): `void`

Checks that an order has the statuses necessary to complete a return.
fulfillment_status cannot be not_fulfilled or returned.
payment_status must be captured.

**`Throws`**

when statuses are not sufficient for returns.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | `Order` | the order to check statuses on |

#### Returns

`void`

#### Defined in

[packages/medusa/src/services/return.ts:198](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/services/return.ts#L198)

___

### withTransaction

▸ **withTransaction**(`transactionManager?`): [`ReturnService`](ReturnService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionManager?` | `EntityManager` |

#### Returns

[`ReturnService`](ReturnService.md)

#### Inherited from

TransactionBaseService.withTransaction

#### Defined in

[packages/medusa/src/interfaces/transaction-base-service.ts:13](https://github.com/medusajs/medusa/blob/f7a63f178/packages/medusa/src/interfaces/transaction-base-service.ts#L13)
