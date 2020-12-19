import { text } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight, SectionList, Image,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { HomeNewsJSON } from "../../../../assects/JSON/Home"

class HomeNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ""
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    var data = []
    var jsondata = HomeNewsJSON["items"]
    // console.log(alldata)
    // console.table(alldata)
    alert(jsondata.length)
    // var alldata = []
    // axios    
    //   .post(
    //     SERVER_IP +
    //     `\getAmbulanceTraffic?traffID=${this.state.traffID}`
    //   )
    //   .then((res) => {
    //     // console.log(res)
    //     var ambul = res['data']['activeSOS']
    //     console.log(ambul.length)
    //     for (let index = 0; index < ambul.length; index++) {
    //       console.log(ambul[index]['hospital_name'])
    //       alldata.push(ambul[index])

    //     }
    this.setState({
      news: jsondata
    })
    // }
    // )
    // .catch((error) => {
    //   console.log(error)
    // })
  }

  renderPic(data) {
    var a = data;
    return (a.slice(a.indexOf("src") + 5, a.indexOf("</a>") - 3));
    // return <Image
    // source= {(a.slice(a.indexOf("src") + 5, a.indexOf("</a>") - 3))}
    // />;
  }

  render() {
    var result = Object.entries(this.state.news);
    console.log(result)
    // console.log("------------------------")
    // console.log(result.length)
    // // con
    return (
      <View>
        <FlatList
          keyExtractor={item => item.findIndex}
          data={result}
          renderItem={({ item }) => (
            <View>
              {/* {item[1]["title"]}
          {item[1]["created"]} */}
          {/* <Text>{item[1]["description"]}</Text> */}
          <Text>{this.renderPic(item[1]["description"])}</Text>
          {/* <Text>{typeof(item[1]["description"])}</Text> */}
              <Image
              source={this.renderPic(item[1]["description"])}
              />
            </View>

          )}

        />
        {/* <ul>
          {result.map(item => (
            <li key={item}>
              otp: {item.title}
            </li>
          ))}

        </ul> */}
        {/* <SectionList
            sections={result}
            // keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          /> */}

        {/* <SectionList
          style={{ margin: 40 }}
          sections={this.state.news}
          renderRow={this.renderRow}
        />
        <SectionList
          sections={result}
          // keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        /> */}
      </View>
    )
  }
}

export default HomeNews