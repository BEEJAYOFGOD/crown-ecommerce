import CollectionOverview from "../../components/collections-overview/collection-overview.component.jsx";

const ShopPage = () => {
  // const collections = useSelector(selectShopCollections);
  return (
    <>
      <div className="shop-page">
        {/* {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))} */}

        <CollectionOverview />
      </div>
    </>
  );
};

export default ShopPage;
