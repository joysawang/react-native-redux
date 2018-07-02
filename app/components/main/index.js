import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actionCounter from './../../actions/actionCounter';

class Main extends React.Component {
  render() {
    const { counter, actions } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>React Native with Redux</Text>
          <Text style={styles.text}>State counter: {counter.count}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Counter increase"
            backgroundColor="#3c6ccc"
            containerViewStyle={styles.buttonContainer}
            onPress={() => actions.counter.increase()}
          />
          <Button
            title="Counter decrease"
            backgroundColor="#e74028"
            containerViewStyle={styles.buttonContainer}
            onPress={() => actions.counter.decrease()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  text: {
    fontSize: 18
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginBottom: 15
  }
});

// Map state to props for use state realtime
const mapStateToProps = (state) => {
  return state;
}
// Map dispatch to props for call actions
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      counter: bindActionCreators(actionCounter, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
