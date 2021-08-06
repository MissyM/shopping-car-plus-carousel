export const getArticles = () =>
  fetch(
    'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
  ).then((res) => res.json())
