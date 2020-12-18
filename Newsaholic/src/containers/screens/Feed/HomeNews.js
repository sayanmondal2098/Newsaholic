import { text } from '@fortawesome/fontawesome-svg-core';
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight, SectionList } from 'react-native'
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

  renderRow(data) {
    return (
      <Text>{`${data["title"]}`}</Text>
    )
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
        renderItem={({item}) => (
          <Text>
          {item[1]["title"]}
          {item[1]["created"]}
          {item[1]["description"]}
          </Text>
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