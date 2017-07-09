import React from 'react'
// import {Link} from 'react-router'
import {Button, Col, Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchEPGData} from '../state/serverData/actionCreators'
import {dateFilter} from '../utilities/dateFilter'
import {MdLoop, MdCloud} from 'react-icons/lib/md'
import "./DashboardView.css"

const time = "2017-03-18T16:20:00+01:00"

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
        <div className="epg-channels-view">
          <Grid>
            <Row>
              {console.log(this.props.epgData)}

              {this.props.epgData.channels.map(
                  (channel) => {
                    return (

                        <div className="epg-channel-wrapper">
                          <div className="epg-channel__title">
                            <b>{channel.title}</b>
                          </div>
                          <ul className="epg-channel-list">

                            {channel.schedules.map(
                                series => ({
                                  ...series,
                                })
                            ).filter((series) => {
                                 return dateFilter(series.start,series.end,time)
                                }
                            ).map((series) => {
                                  return (<li key={series.start + series.end} className="epg-channel-list__series">
                                    {series.title}
                                  </li>)
                                }
                            )}


                          </ul>
                        </div>
                    )
                  }
              )}

            </Row>
          </Grid>
        </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)

