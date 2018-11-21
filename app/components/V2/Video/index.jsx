import React from 'react'
import { withNamespaces } from 'react-i18next'
import fakeVideos from './fakevideos'
import SingleVideoCard from './SingleVideoCard'

@withNamespaces('videoDebate')
export default class Video extends React.PureComponent {
  render() {
    return (
      <div className="video-container">
        {fakeVideos.map((video) => {
          return <SingleVideoCard key={video.id} video={video} />
        })}
      </div>
    )
  }
}
