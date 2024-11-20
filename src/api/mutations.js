/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
    mutation ProcessOrder($input: ProcessOrderInput!) {
        processOrder(input: $input)
    }
`;
export const createProduct = /* GraphQL */ `
    mutation CreateProduct(
        $input: CreateProductInput!
        $condition: ModelProductConditionInput
    ) {
        createProduct(input: $input, condition: $condition) {
            id
            name
            description
            image
            seller
            featured
            price
            orders {
                nextToken
                __typename
            }
            createdAt
            updatedAt
            __typename
        }
    }
`;
export const updateProduct = /* GraphQL */ `
    mutation UpdateProduct(
        $input: UpdateProductInput!
        $condition: ModelProductConditionInput
    ) {
        updateProduct(input: $input, condition: $condition) {
            id
            name
            description
            image
            seller
            featured
            price
            orders {
                nextToken
                __typename
            }
            createdAt
            updatedAt
            __typename
        }
    }
`;
export const deleteProduct = /* GraphQL */ `
    mutation DeleteProduct(
        $input: DeleteProductInput!
        $condition: ModelProductConditionInput
    ) {
        deleteProduct(input: $input, condition: $condition) {
            id
            name
            description
            image
            seller
            featured
            price
            orders {
                nextToken
                __typename
            }
            createdAt
            updatedAt
            __typename
        }
    }
`;
export const createProductOrder = /* GraphQL */ `
    mutation CreateProductOrder(
        $input: CreateProductOrderInput!
        $condition: ModelProductOrderConditionInput
    ) {
        createProductOrder(input: $input, condition: $condition) {
            id
            product_id
            order_id
            product {
                id
                name
                description
                image
                seller
                featured
                price
                createdAt
                updatedAt
                __typename
            }
            order {
                id
                user
                date
                total
                createdAt
                updatedAt
                customer
                __typename
            }
            createdAt
            updatedAt
            customer
            __typename
        }
    }
`;
export const updateProductOrder = /* GraphQL */ `
    mutation UpdateProductOrder(
        $input: UpdateProductOrderInput!
        $condition: ModelProductOrderConditionInput
    ) {
        updateProductOrder(input: $input, condition: $condition) {
            id
            product_id
            order_id
            product {
                id
                name
                description
                image
                seller
                featured
                price
                createdAt
                updatedAt
                __typename
            }
            order {
                id
                user
                date
                total
                createdAt
                updatedAt
                customer
                __typename
            }
            createdAt
            updatedAt
            customer
            __typename
        }
    }
`;
export const deleteProductOrder = /* GraphQL */ `
    mutation DeleteProductOrder(
        $input: DeleteProductOrderInput!
        $condition: ModelProductOrderConditionInput
    ) {
        deleteProductOrder(input: $input, condition: $condition) {
            id
            product_id
            order_id
            product {
                id
                name
                description
                image
                seller
                featured
                price
                createdAt
                updatedAt
                __typename
            }
            order {
                id
                user
                date
                total
                createdAt
                updatedAt
                customer
                __typename
            }
            createdAt
            updatedAt
            customer
            __typename
        }
    }
`;
export const createOrder = /* GraphQL */ `
    mutation CreateOrder(
        $input: CreateOrderInput!
        $condition: ModelOrderConditionInput
    ) {
        createOrder(input: $input, condition: $condition) {
            id
            user
            date
            total
            products {
                nextToken
                __typename
            }
            createdAt
            updatedAt
            customer
            __typename
        }
    }
`;
export const updateOrder = /* GraphQL */ `
    mutation UpdateOrder(
        $input: UpdateOrderInput!
        $condition: ModelOrderConditionInput
    ) {
        updateOrder(input: $input, condition: $condition) {
            id
            user
            date
            total
            products {
                nextToken
                __typename
            }
            createdAt
            updatedAt
            customer
            __typename
        }
    }
`;
export const deleteOrder = /* GraphQL */ `
    mutation DeleteOrder(
        $input: DeleteOrderInput!
        $condition: ModelOrderConditionInput
    ) {
        deleteOrder(input: $input, condition: $condition) {
            id
            user
            date
            total
            products {
                nextToken
                __typename
            }
            createdAt
            updatedAt
            customer
            __typename
        }
    }
`;
