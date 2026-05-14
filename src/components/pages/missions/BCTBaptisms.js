import React, { useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MissionsLiveLinks from './sections/MissionsLinks/MissionsLiveLinks'
import './BCTBaptisms.css'

const INITIAL_ARCHIVE_VISIBLE_COUNT = 2
const ARCHIVE_BATCH_SIZE = 4

const baptismPhotos = [
  {
    src: 'https://images.pexels.com/photos/16180685/pexels-photo-16180685.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Believers gathered in the water for a baptism service',
    title: 'Baptism Service',
    group: 'Featured',
  },
  {
    src: 'https://images.pexels.com/photos/10402142/pexels-photo-10402142.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A man being baptized in water',
    title: 'A Public Testimony',
    group: 'Featured',
  },
  {
    src: 'https://images.pexels.com/photos/10402150/pexels-photo-10402150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Hands raised during a baptism moment',
    title: 'Joy in the Water',
    group: 'Featured',
  },
  {
    src: 'https://images.pexels.com/photos/10402141/pexels-photo-10402141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Two believers standing together during baptism',
    title: 'Standing Together',
    group: '2026',
  },
  {
    src: 'https://images.pexels.com/photos/10402148/pexels-photo-10402148.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A baptism candidate in the water surrounded by others',
    title: 'A New Beginning',
    group: '2026',
  },
  {
    src: 'https://images.pexels.com/photos/10402149/pexels-photo-10402149.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Worshippers gathered around a baptism service',
    title: 'Witnesses and Family',
    group: '2026',
  },
  {
    src: 'https://images.pexels.com/photos/10402139/pexels-photo-10402139.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A believer stepping into the water for baptism',
    title: 'Stepping Forward',
    group: '2025',
  },
  {
    src: 'https://images.pexels.com/photos/10402190/pexels-photo-10402190.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A prayerful moment during a baptism gathering',
    title: 'Prayer Before the Water',
    group: '2025',
  },
  {
    src: 'https://images.pexels.com/photos/10402187/pexels-photo-10402187.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Believers celebrating after a baptism',
    title: 'Rejoicing Together',
    group: '2025',
  },
  {
    src: 'https://images.pexels.com/photos/10402211/pexels-photo-10402211.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A baptism service outdoors',
    title: 'An Outdoor Gathering',
    group: '2024',
  },
  {
    src: 'https://images.pexels.com/photos/10402144/pexels-photo-10402144.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Baptism service with believers close by',
    title: 'A Shared Witness',
    group: '2024',
  },
]

const BCTBaptisms = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [visibleArchiveCounts, setVisibleArchiveCounts] = useState({})
  const currentYear = String(new Date().getFullYear())

  const featuredPhotos = useMemo(
    () => baptismPhotos.filter((photo) => photo.group === 'Featured'),
    []
  )

  const archiveGroups = useMemo(
    () => ['2026', '2025', '2024'].map((year) => ({
      year,
      photos: baptismPhotos.filter((photo) => photo.group === year),
    })),
    []
  )

  const allGalleryPhotos = useMemo(
    () => [...featuredPhotos, ...archiveGroups.flatMap((group) => group.photos)],
    [archiveGroups, featuredPhotos]
  )
  const currentYearArchiveCount =
    archiveGroups.find((group) => group.year === currentYear)?.photos.length || 0
  const archivePhotoCount = allGalleryPhotos.length - featuredPhotos.length
  const archiveGroupCount = archiveGroups.length

  const selectedPhoto =
    selectedIndex !== null ? allGalleryPhotos[selectedIndex] : null

  const openPhoto = (photo) => {
    const index = allGalleryPhotos.findIndex((item) => item.src === photo.src)
    setSelectedIndex(index >= 0 ? index : 0)
  }

  const closeLightbox = () => setSelectedIndex(null)

  const toggleYearExpansion = (year, totalPhotos) => {
    setVisibleArchiveCounts((currentState) => {
      const currentVisibleCount =
        currentState[year] || INITIAL_ARCHIVE_VISIBLE_COUNT

      if (currentVisibleCount >= totalPhotos) {
        return {
          ...currentState,
          [year]: INITIAL_ARCHIVE_VISIBLE_COUNT,
        }
      }

      return {
        ...currentState,
        [year]: Math.min(totalPhotos, currentVisibleCount + ARCHIVE_BATCH_SIZE),
      }
    })
  }

  const showPreviousPhoto = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : (currentIndex - 1 + allGalleryPhotos.length) % allGalleryPhotos.length
    )
  }

  const showNextPhoto = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex + 1) % allGalleryPhotos.length
    )
  }

  return (
    <>
      <section className="baptisms-hero">
        <img
          src="https://images.pexels.com/photos/16180685/pexels-photo-16180685.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Believers gathered for baptism"
          className="baptisms-hero-image"
        />
        <div className="baptisms-hero-overlay">
          <div className="baptisms-hero-copy">
            <h1>Benoni City Tabernacle Baptisms</h1>
            <p>
              A growing record of souls making a public testimony in Christ as we
              continue the great commission and reach lives through the Gospel.
            </p>
          </div>
        </div>
      </section>

      <section id="mission-links">
        <MissionsLiveLinks />
      </section>

      <section className="baptisms-intro-section">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div className="baptisms-summary-tile">
                <div className="baptisms-summary-stat">
                  {String(currentYearArchiveCount).padStart(2, '0')}
                </div>
                <span className="baptisms-summary-number">{currentYear}</span>
                <h3>Recent Baptisms</h3>
                <p>Baptism moments currently grouped under this year.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="baptisms-summary-tile baptisms-summary-tile-alt">
                <div className="baptisms-summary-stat">
                  {String(archivePhotoCount).padStart(2, '0')}
                </div>
                <span className="baptisms-summary-number">Archive</span>
                <h3>Photo Archive</h3>
                <p>Older baptism moments grouped below.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="baptisms-summary-tile">
                <div className="baptisms-summary-stat">
                  {String(archiveGroupCount).padStart(2, '0')}
                </div>
                <span className="baptisms-summary-number">Year Groups</span>
                <h3>Click To View</h3>
                <p>Open any image and browse it larger.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="baptisms-gallery-section">
        <Container>
          <div className="baptisms-section-heading">
            <span>Featured</span>
            <h2>Recent Baptism Highlights</h2>
          </div>

          <div className="baptisms-featured-grid">
            {featuredPhotos.map((photo) => (
              <button
                key={photo.src}
                type="button"
                className="baptisms-photo-tile baptisms-photo-tile-featured"
                onClick={() => openPhoto(photo)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="baptisms-archive-section">
        <Container>
          <div className="baptisms-section-heading">
            <span>Archive</span>
            <h2>Baptism Gallery By Year</h2>
          </div>

          {archiveGroups.map((group) => (
            <div key={group.year} className="baptisms-archive-group">
              <div className="baptisms-archive-header">
                <h3>{group.year}</h3>
              </div>

              <div className="baptisms-archive-grid">
                {group.photos
                  .slice(
                    0,
                    visibleArchiveCounts[group.year] || INITIAL_ARCHIVE_VISIBLE_COUNT
                  )
                  .map((photo) => (
                  <button
                    key={photo.src}
                    type="button"
                    className="baptisms-photo-tile"
                    onClick={() => openPhoto(photo)}
                  >
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </button>
                ))}
              </div>

              {group.photos.length > INITIAL_ARCHIVE_VISIBLE_COUNT && (
                <div className="baptisms-archive-actions">
                  <button
                    type="button"
                    className="baptisms-view-more"
                    onClick={() => toggleYearExpansion(group.year, group.photos.length)}
                  >
                    {(visibleArchiveCounts[group.year] || INITIAL_ARCHIVE_VISIBLE_COUNT) >=
                    group.photos.length
                      ? `Show Less ${group.year}`
                      : `View More ${group.year}`}
                  </button>
                </div>
              )}
            </div>
          ))}
        </Container>
      </section>

      {selectedPhoto && (
        <div
          className="baptisms-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="baptisms-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            Close
          </button>

          <button
            type="button"
            className="baptisms-lightbox-nav baptisms-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousPhoto()
            }}
            aria-label="Previous photo"
          >
            Prev
          </button>

          <div
            className="baptisms-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <div className="baptisms-lightbox-caption">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.group === 'Featured' ? 'Featured' : selectedPhoto.group}</p>
            </div>
          </div>

          <button
            type="button"
            className="baptisms-lightbox-nav baptisms-lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              showNextPhoto()
            }}
            aria-label="Next photo"
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default BCTBaptisms
