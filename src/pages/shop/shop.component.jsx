import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection-preview/preview-collection.component";
const ShopPage = () => {
  const collections = SHOP_DATA;
  return (
    <>
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </>
  );
};

export default ShopPage;
