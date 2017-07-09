import React from 'react'
// import {Link} from 'react-router'
// import {Button, Col, Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchEPGData} from '../state/serverData/actionCreators'
import {MdLoop, MdCloud} from 'react-icons/lib/md'

const mapStateToProps = state => ({
  epgData: state.epgData.epgChannelsData
})

const mapDispatchToProps = dispatch => ({
  fetchEPGData: () => dispatch(fetchEPGData())
})

class DashboardView extends React.Component {

  componentWillMount() {
      this.props.fetchEPGData()
  }

  render() {
    if (this.props.epgData === null) {
      return (
          <div>
            <h1>loading</h1>
          </div>
      )
    }

    return (
        <div>
          {console.log(this.props.epgData)}
          <ul>
            {this.props.epgData.channels.map(
                (channel)=>{
                  return <li>{channel.title}</li>
                }
            )}
          </ul>
        </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardView)

