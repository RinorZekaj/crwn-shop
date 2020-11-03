import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpiiner = WithSpinner(CollectionPage);

function ShopPage(props) {
  const { match, updateCollections } = props
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpiiner isLoading={loading} {...props} />} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
