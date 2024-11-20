/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateProductOrder = /* GraphQL */ `
  subscription OnCreateProductOrder(
    $filter: ModelSubscriptionProductOrderFilterInput
  ) {
    onCreateProductOrder(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProductOrder = /* GraphQL */ `
  subscription OnUpdateProductOrder(
    $filter: ModelSubscriptionProductOrderFilterInput
  ) {
    onUpdateProductOrder(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProductOrder = /* GraphQL */ `
  subscription OnDeleteProductOrder(
    $filter: ModelSubscriptionProductOrderFilterInput
  ) {
    onDeleteProductOrder(filter: $filter) {
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
      __typename
    }
  }
`;
