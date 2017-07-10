import React from 'react'
import {Col, Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchEPGData} from '../state/serverData/actionCreators'
import {dateFilter} from '../utilities/dateFilter'
import {convertToClockTime} from '../utilities/convertToClockTime'

//Mark: other site components imports
import {Header} from '../Header'
import {Footer} from '../Footer'

//Mark: media and styling imports
import {FaAngleDoubleRight, FaAngleRight} from 'react-icons/lib/fa'
import logoList from '../utilities/importImages'
import "./DashboardView.css"


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
          <Header/>
          <Grid>
            <Row>
              {this.props.epgData.channels.map(
                  (channel) => {
                    return (

                        <Col xs={12} className="epg-channel-wrapper">

                          <Col xs={12} lg={2} className="epg-channel-logo">
                            <div className="epg-channel-logo-wrapper">
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
                                          <Col xs={12} lg={6} key={seriesOnScreen.start + seriesOnScreen.end}
                                               className="epg-channel-list__series--current">

                                            <Col xs={10}>
                                              <p>Playing now from {convertToClockTime(seriesOnScreen.start)}</p>
                                              {seriesOnScreen.title}
                                            </Col>

                                            <Col xs={2}>
                                              <FaAngleRight/>
                                            </Col>

                                          </Col>)

                                    case 1:
                                      return (
                                          <Col xs={12} lg={6} key={seriesOnScreen.start + seriesOnScreen.end}
                                               className="epg-channel-list__series--next">

                                            <Col xs={10}>
                                              <p>Upcoming at {convertToClockTime(seriesOnScreen.start)}
                                              </p>
                                              {seriesOnScreen.title}
                                            </Col>

                                            <Col xs={2}>
                                              <FaAngleDoubleRight/>
                                            </Col>

                                          </Col>)
                                    default:
                                      return false
                                  }
                                }
                            )}
                          </Col>
                        </Col>
                    )
                  }
              )}

            </Row>
          </Grid>
          <Footer/>
        </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)

