import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SeniorImage from '../../../../../media/WMB/wmb-2.jpg';
import './WilliamBranhamFirst.css'

const WilliamBranhamFirst = () => {

    const goToMessenger = () => {
        window.open('https://themessage.com/messenger2', '_blank')
    };

  return (
    <section className='william-branham-first-section'>
      <Container>
        <Row>
            {/* Left Column */}
            <Col xs={12} md={8} className='william-branham-first-left-col'>
            <h1>William Branham: A Divine Gift to Our Generation</h1>
            <p>
                William Branham was a special man, a divine gift sent by God to this earth at a significant moment in time. Born on April 6, 1909, his birth was no ordinary event—it was marked by heavenly signs that echoed the greatest moment in human history: the birth of our Lord Jesus Christ.
            </p>
            <p>
                History tells us that on the night of Christ’s birth, three stars aligned to form what is known as the Star of Bethlehem, guiding the wise men to the Savior. Many years later, those same stars once again crossed paths, signaling another divine intervention—this time, the birth of William Branham. This celestial alignment is believed to be God's way of commemorating the greatest gift to mankind, Jesus Christ, by sending a lesser gift in His honor.
            </p>
            <h3>A Birth Marked by Signs and Wonders</h3>
            <p>
                Witnesses at William Branham’s birth reported a pillar of fire appearing in the room, a manifestation of God’s presence. A dove was seen at the window, a sign of the Holy Spirit’s anointing upon the newborn child. These supernatural occurrences foreshadowed the extraordinary ministry that he would later carry out.
            </p>
            <p>
                According to the Jewish calendar, William Branham’s birth coincided with the 15th of Abib/Nisan, a deeply significant date in biblical history. This day is not only the exact date of Jesus' crucifixion, but it is also linked to key biblical events:
            </p>
            <p>
                    <ul>
                        <li>
                            The day Moses encountered God at the burning bush, receiving his divine commission.
                        </li>
                        <li>
                            The day the Exodus began, when God’s people were delivered from Egypt.
                        </li>
                        <li>
                            Some scholars even suggest that Jesus was born on this very day, which would explain why the same stars that shone at His birth crossed paths on the day of William Branham’s birth.
                        </li>
                    </ul>
            </p>
            <h3>Elijah’s Coming and the Prophetic Connection</h3>
            <p>
                The 15th of Abib/Nisan is also significant to the Jewish people as the day they celebrate the coming of Elijah the Prophet, who is expected to usher in the Messiah. During the Passover Seder, they set aside a special cup of wine and an empty chair, awaiting Elijah’s return.
            </p>
            <p>
                This prophetic parallel is profound, as William Branham’s ministry was closely associated with the spirit of Elijah—a prophetic forerunner sent to restore the true Gospel and prepare God’s people for the return of Jesus Christ.
            </p>
            <h3>A Messenger for Our Time</h3>
            <p>
                Throughout his ministry, William Branham performed signs and wonders, healed the sick, and preached a message of restoration and divine truth. His life and calling were marked by supernatural visitations and prophecies that came to pass with incredible accuracy.
            </p>
            <p>
                His birth was not a coincidence—it was a divinely orchestrated event that signaled a new move of God on the earth. Just as the Star of Bethlehem heralded Christ’s birth, the celestial alignment at William Branham’s birth was a sign of a prophetic messenger sent in this generation.
            </p>
            <p>
                As we reflect on his life and ministry, it is clear that William Branham was a special gift from God, a man sent to fulfill a great purpose and to remind us of the greatest gift ever given—our Lord and Savior, Jesus Christ.
            </p>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={4} className="text-center william-first-image">
            <img
                src={SeniorImage}
                alt="Senior Class"
                className="img-fluid mb-4"
                style={{ objectFit: 'cover', width: '100%' }}
            />
            <div className="text-start">
                <h6 className="text-uppercase" style={{ color: 'rgba(207, 74, 70)' }}>
                William Marrion Branham
                </h6>
                <h4 className="mb-4">The Messenger to Laodecian Age</h4>
                <Button className='btn-sunday-school' variant="outline-danger" size="lg" onClick={goToMessenger}>
                Learn More
                </Button>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WilliamBranhamFirst
