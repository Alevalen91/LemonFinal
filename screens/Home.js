
import { Header } from "./header"
import { useEffect, useState, useCallback, useMemo } from 'react';
import {Text,View,StyleSheet,SectionList,SafeAreaView,ScrollView,StatusBar,Alert,Image} from 'react-native';
import { Searchbar } from 'react-native-paper';
import debounce from 'lodash.debounce';
import {createTable,getMenuItems,saveMenuItems,filterByQueryAndCategories} from '../database';
import Filters from '../components/Filters';
import { getSectionListData, useUpdateEffect } from '../utils/validateEmail';
import { React } from 'react'

const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';
const sections = ['Appetizers', 'Salads', 'Beverages'];



const Item = ({ title, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>${price}</Text>
  </View>
);

export default function Home() {
  const [data, setData] = useState([]);
  const [searchBarText, setSearchBarText] = useState('');
  const [query, setQuery] = useState('');
  const [filterSelections, setFilterSelections] = useState(
    sections.map(() => false)
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        API_URL
      )
      //.then( res => res.json());
      const json = await response.json();

      return json
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    (async () => {
      try {

        await createTable();
        // await truncateTable();
        let menuItems = await getMenuItems();

        // The application only fetches the menu data once from a remote URL
        // and then stores it into a SQLite database.
        // After that, every application restart loads the menu from the database
        if (!menuItems.length > 0) {
          const menuItems = await fetchData();

          await saveMenuItems(menuItems.menu);
        }


        const sectionListData = getSectionListData(menuItems);
        setData(sectionListData);
      } catch (e) {
        console.log(e)
        Alert.alert(' ' + e.message);
      }
    })();
  }, []);


  useUpdateEffect(() => {
    (async () => {
      const activeCategories = sections.filter((s, i) => {
        // If all filters are deselected, all categories are active
        if (filterSelections.every((item) => item === false)) {
          return true;
        }
        return filterSelections[i];
      });
      try {
        const menuItems = await filterByQueryAndCategories(
          query,
          activeCategories
        )


        const sectionListData = getSectionListData(menuItems);

        setData(sectionListData);
      } catch (e) {
        console.log(e)
        Alert.alert(e.message);
      }
    })();
  }, [filterSelections, query]);

  const lookup = useCallback((q) => {
    setQuery(q);
  }, []);

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

  const handleSearchChange = (text) => {
    setSearchBarText(text);
    debouncedLookup(text);
  };

  const handleFiltersChange = async (index) => {
    const arrayCopy = [...filterSelections];
    arrayCopy[index] = !filterSelections[index];
    setFilterSelections(arrayCopy);

  };

  return (
    <ScrollView style={styles.container}>
      <Header isLogged = {true}> </Header>


      <View style={styles.heroContainer}>
        <Text style={styles.titleText}>Little Lemon</Text>
        <Text style={styles.subTitleText}>Chicago</Text>
        <View style={styles.heroSubContainer}>
          <Text style={styles.descriptionText}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
          <Image
            source={require('../assets/Heroimage.png')}
            style={styles.heroImage} />
        </View>
      </View>

    <View>



        <Searchbar
          placeholder="Search"
          placeholderTextColor="#333333"
          onChangeText={handleSearchChange}
          value={searchBarText}
          style={styles.searchBar}
          iconColor="#333333"
          inputStyle={{ color: "#333333" }}
          elevation={0}
        />
      </View>

      <Filters
        selections={filterSelections}
        onChange={handleFiltersChange}
        sections={sections}
      />
      <SafeAreaView> 
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item title={item.title} 
          price={item.price} 
          description={item.description} 
          image={item.image}/>
        )}
        renderSectionHeader={({ section: { title } }) => (
          
          <Text style={styles.header}>{title}</Text> 
         
         
        )}
      />
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
  },
  sectionList: {
    paddingHorizontal: 16,
    marginBottom:10
  },
  headerContainer: {
    flex: 1,
    marginBottom: "30px"
},
heroContainer: {
  flex: 5,
  backgroundColor: '#495E57',
},
formContainer:{
  flex:4,
  marginTop:20,

},
heroSubContainer: {
  flexDirection: 'row',
  marginBottom: 10,
},
heroImage: {
  height: 150,
  width: 150,
  resizeMode: 'cover',
  borderRadius: 16,
  marginLeft:30
},
titleText: {

  fontSize: 30,
  color: '#F4CE14',
  paddingHorizontal: 10,
  marginTop: 10,
},
subTitleText: {

  fontSize: 20,
  color: '#EDEFEE',
  paddingHorizontal: 10,
},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    paddingVertical: 8,
    color: '#FBDABB',
    backgroundColor: '#495E57',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  descriptionText: {

    fontSize: 17,
    paddingVertical: 20,
    paddingLeft: 10,
    color: '#EDEFEE',
    width: 200,
  },
  titleText: {

    fontSize: 30,
    color: '#F4CE14',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  subTitleText: {

    fontSize: 20,
    color: '#EDEFEE',
    paddingHorizontal: 10,
  },
  descriptionText: {

    fontSize: 17,
    paddingVertical: 20,
    paddingLeft: 10,
    color: '#EDEFEE',
    width: 200,
  },
});
