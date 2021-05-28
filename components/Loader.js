import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import { StateContext } from "../contexts/StateContext";
import styles from "../styles/commonStyles";

const Loader = () => {

  const { state } = useContext(StateContext);

  if(state?.isLoading){
    return(
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return null;
}

export default Loader;