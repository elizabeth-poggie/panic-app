import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
      padding: 30,
      paddingTop: 45,
      backgroundColor: 'white'
    },
    lesson_container: {
      padding: 30,
      paddingTop: 45,
      backgroundColor: 'white',
      zIndex: 0,
    },
    category_container: {
        paddingBottom: 30,
        overflow: 'hidden',
    },
    tile_container: {
        flex: 1,
        width: '90%'
      },
    category_image: {
        width: '100%',
        aspectRatio: 1,
        overflow: 'hidden',
    },
    title: {
        fontFamily: 'title_font',
        fontSize: 30,
        paddingBottom: 10,
        marginBottom: 0,
        color: 'black',
        fontWeight: 'normal',
        textAlign: 'left',
    },
    checkbox: {
        borderWidth: 0, 
        marginHorizontal: 0, 
        marginVertical: 0,
        backgroundColor: 'white',
    },
    entry_title: {
        fontFamily: 'title_font',
        fontSize: 30,
        paddingBottom: 10,
        marginBottom: 0,
        color: 'black',
        fontWeight: 'normal',
        textAlign: 'center'
    },
    header: {
        fontFamily: 'title_font',
        fontSize: 18,
        fontWeight: 'bold'
    },
    paragraph: {
        fontFamily: 'header_font',
        fontSize: 16,
        fontWeight: 'normal',
    },
    tile_header: {
        fontFamily: 'header_font',
        position: 'absolute',
        left: 10,
        bottom: 15,
        textAlign: 'left'
    },
    home_tile_header: {
        fontFamily: 'header_font',
        position: 'absolute',
        left: 10,
        bottom: 0,
        textAlign: 'left'
    },
    tile_paragraph: {
        fontFamily: 'header_font',
        position: 'absolute',
        left: 10,
        bottom: 0,
    },
    rating_icon: {
        height: '100%', 
        width: '100%', 
        resizeMode: 'contain'
    },
    primary_button: {
        backgroundColor: '#fe8e66',
    },
    secondary_button: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderRadius:50,
    },
    edit_button_location: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    journal_button_location: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    dynamic_button_location: {
        alignSelf: 'center'
    }, 
    item: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
        height: 15,
        
        paddingTop: 30
      },
      activity: {
        fontSize: 11,
        color: 'gray',
      }
  });

export { styles } 