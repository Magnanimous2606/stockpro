import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path as necessary

type ScanneditemsNavigationProp = StackNavigationProp<RootStackParamList, 'Inventory'>;

const Scanneditems: React.FC<{ navigation: ScanneditemsNavigationProp }> = ({ navigation }) => {
    const [] = useState<string>('stock');

    const items = [
    { id: 1234, name: 'Cement', stock: '20kg', category: 'Construction', image: require('../../images/cement.png') },
    { id: 5678, name: 'Red Paint', stock: '10 Liters', category: 'Paint & Coating', image: require('../../images/paint.png') },
    { id: 1839, name: 'Steel Rods', stock: '50 Units', category: 'Construction', image: require('../../images/steel.png') },
    { id: 9683, name: 'Bricks', stock: '500 Pieces', category: 'Construction', image: require('../../images/bricks.png') },
    { id: 4567, name: 'Cement', stock: '20kg', category: 'Construction', image: require('../../images/cement.png') },
    { id: 3456, name: 'Red Paint', stock: '10 Liters', category: 'Paint & Coating', image: require('../../images/paint.png') },
        // Add more items here...
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Scanned Items</Text>
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    {items.map(item => (
                      <View key={item.id} style={styles.inventoryItem}>
                        {item.image && <Image source={item.image} style={styles.itemImage} />}
                        <View style={styles.itemDetails}>
                          <Text>#{item.id}</Text>
                          <Text>Item Name: {item.name}</Text>
                          <Text>In stock: {item.stock}</Text>
                          <Text>Category: {item.category}</Text>
                        </View>
                        <View style={styles.itemActions}>
                          <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.actionButton}>
                              <FAIcon name="barcode" size={20} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                              <FAIcon name="edit" size={20} color="#000" />
                            </TouchableOpacity>
                          </View>
                          <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.actionButton}>
                              <FAIcon name="trash" size={20} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                            <FAIcon name="eye" size={20} color="#000" />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
                </ScrollView>
                <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('StockProEmployee')}>
                    <FAIcon name="home" size={20} color="#000" />
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 5,
    },
    inventoryItem: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemActions: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    actionButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 5,
    },
    homeButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 50,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        width:'30%' ,
        bottom: Platform.OS === 'android' ?  0:10,
        marginHorizontal:'35%',
        // marginVertical:'3%',   
        },
});

export default Scanneditems;
//scanned items