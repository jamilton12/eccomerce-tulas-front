export type contentType ={
  uid: string,
  apiID: string,
  schema: {
    draftAndPublish: boolean,
    displayName: string,
    singularName: string,
    pluralName: string,
    description: string,
    kind: string,
    collectionName: string,
    attributes: {
      productName: {
        type: string,
        required: boolean
      }
      productImages: {
        type: string,
        multiple: boolean,
        required: boolean,
        private: boolean,
        allowedTypes: string[]
      },
      productDescription: {
        type: string,
        required: boolean
      },
      slug: {
        type: string,
        targetField: string,
        required: boolean
      },
      product_categories: {
        type: string,
        relation: string,
        target: string,
        inversedBy: string,
        targetAttribute: string,
        private: boolean
      },
      price: {
        type: string,
        required: boolean
      },
      isActived: {
        type: string,
        default: boolean,
        required: boolean,
      },
      isFeature: {
        type: string,
        required: boolean
      }
    },
    visible: boolean,
    restrictRelationsTo: null
  }
}
