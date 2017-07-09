import React from 'react'
// import {Link} from 'react-router'
import {Button, Col, Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchEPGData} from '../state/serverData/actionCreators'
import {dateFilter} from '../utilities/dateFilter'
import {MdLoop, MdCloud} from 'react-icons/lib/md'
import logoList from '../utilities/importImages'
import "./DashboardView.css"


console.log(logoList.channel5)

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
              {this.props.epgData.channels.map(
                  (channel) => {
                    return (

                        <Col xs={12} className="epg-channel-wrapper">

                          <Col xs={12} lg={2} className="epg-channel__logo">
                            <div>
                              <img src={logoList[channel.id]} alt={channel.title}/>
                            </div>
                          </Col>

                          <Col xs={12} lg={10} className="epg-channel-list">
                            {channel.schedules.map(
                                series => ({
                                  ...series,
                                })
                            ).filter((seriesToFilter) => {
                                  return dateFilter(seriesToFilter.start, seriesToFilter.end)
                                }
                            ).map((seriesOnScreen, index) => {
                                  switch (index) {
                                    case 0:
                                      return (
                                          <Col xs={12} lg={4} key={seriesOnScreen.start + seriesOnScreen.end}
                                               className="epg-channel-list__series--current">
                                            <p>Playing now</p>
                                            {seriesOnScreen.title}
                                          </Col>)
                                    case 1:
                                      return (
                                          <Col xs={12} lg={4} key={seriesOnScreen.start + seriesOnScreen.end}
                                               className="epg-channel-list__series--next">
                                            <p>Upcoming</p>
                                            {seriesOnScreen.title}
                                          </Col>)
                                    default:
                                      return false
                                  }
                                }
                            )}

                            <Col xs={2}>
                              Add to favorites
                            </Col>

                          </Col>
                        </Col>
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

