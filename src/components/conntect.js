import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from '../actions/actionCreatores';
//like selectors in NGRX angular.
function mapStateToProps(store) {
  return {
    allCourses: store.courses,
    allPosts: store.posts,
  };
}

//if we call action method directly it will auton matically dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators(AllActions, dispatch);
}

// it return same app component with added feature
var MainApp = connect(mapStateToProps, mapDispatchToProps)(App); // MainApp is the Higher order component which are same as App have some
// extra feature like props
export default MainApp;
