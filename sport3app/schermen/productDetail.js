import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Article from '../components/ArticleDetail';

const ProductDetail = ({route, navigation}) => {
    const { id } = route.params;

    return (
        <View>
            <Article 
            articleId={id}/>
        </View>
    )
}


export default ProductDetail;