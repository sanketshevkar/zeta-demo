import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native';
import MarketPlaceCard from '../components/cards/MarketPlaceCard';

const MarketPlace = ({mobileNumber}) => {
    const [marketPlacePots, setMarketPlacePots] = useState([]);
    useEffect(() => {
        console.log(marketPlacePots);
        try {
            fetch(`http://3.109.210.47:8085/pot/marketPlace`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => res.json()).then(data => setMarketPlacePots(data));
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <View style={{ backgroundColor: "#ffffff" }}>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                </View>
                {marketPlacePots.map((pot, key) => {
                    return (
                        <View key={key}>
                            <MarketPlaceCard  pot={pot} mobileNumber={mobileNumber}/>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default MarketPlace
