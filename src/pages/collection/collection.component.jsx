import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CategoryComponent = () => {
  const { category } = useParams();
  const shopCollection = useSelector(selectShopCollection(category));

  const { title: collectionTitle, items } = shopCollection;

  return (
    <>
      <div className="collection-page">
        <h2 className="title">{collectionTitle}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryComponent;

// export const CategoryLoader = ({params}) =>{
//     const {category} = params;

//     const
// }
