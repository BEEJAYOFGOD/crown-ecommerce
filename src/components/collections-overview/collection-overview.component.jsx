import "./collecions-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component.jsx";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  console.log(collections);
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
