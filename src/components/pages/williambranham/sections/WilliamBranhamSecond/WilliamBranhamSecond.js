import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SeniorImage from '../../../../../media/WMB/wmb-4.jpg';
import './WilliamBranhamSecond.css'

const WilliamBranhamSecond = () => {

    const goToMessenger = () => {
        window.open('https://themessage.com/messenger7', '_blank')
    };

  return (
    <section className='william-branham-second-section'>
        <Container>
        <Row>
            {/* Left Column */}
            <Col xs={12} md={8} className='william-branham-second-left-col'>
            <h1>William Branham and Moses: A Parallel of Divine Commission</h1>
            <p>
                Throughout history, God has sent prophetic messengers to deliver His people from bondage and guide them into His divine plan. One of the greatest examples of this is Moses, the prophet chosen to lead Israel from slavery in Egypt to freedom in Canaan. In the last days, God sent <strong>William Branham</strong>, whose ministry closely mirrored that of Moses—leading a spiritual exodus from <strong>denominational bondage</strong> to the true <strong>liberation of the Holy</strong> Ghost.
            </p>
            <p>
                The similarities between these two great ministries are remarkable, revealing God’s consistent pattern in dealing with His people.
            </p>
            <h3>The Exodus: From Physical and Spiritual Bondage</h3>
            <p>
                Moses was commissioned to <strong>deliver the Israelites from physical bondage</strong> and bring them into their promised inheritance. His ministry was marked by divine encounters, miracles, and an undeniable call from God.
            </p>
            <p>
                Similarly, <strong>William Branham was called to lead believers out of denominational confusion</strong>—a system of human traditions and theological interpretations that deviated from the original Word. His message emphasized a return to the <strong>full Gospel and the power of God</strong>, guiding believers into the true baptism of the Holy Ghost.
            </p>
            <h3>Three Signs: The Vindication of a Prophet</h3>
            <p>
            Both Moses and William Branham were given three distinct signs to validate their ministry.
            </p>
            <h4>Moses’ Three Signs:</h4>
            <p>
                    <ol>
                        <li>
                            <strong>A sign in his hand</strong> – When Moses placed his hand inside his cloak, it became leprous and was then restored (Exodus 4:6-7).
                        </li>
                        <li>
                            <strong>The rod turning into a serpent</strong> – A demonstration of God's authority over the enemy (Exodus 4:3-4).
                        </li>
                        <li>
                            <strong>Turning water into blood</strong> – A sign of judgment upon Egypt (Exodus 4:9).
                        </li>
                    </ol>
            </p>
            <p>
                Two of these three signs were impersonated by Jannes and Jambres, the magicians of Pharaoh’s court (Exodus 7:11-12), but God’s power ultimately prevailed.
            </p>
            <h4>William Branham’s Three Pulls:</h4>
            <p>
                    <ol>
                        <li>
                            <strong>A sign in the hand</strong> – He could detect sicknesses and diseases through vibrations in his hand.
                        </li>
                        <li>
                            <strong>Discernment of the hearts</strong> – He could supernaturally reveal the thoughts, names, and circumstances of individuals, just as Jesus did (John 1:47-48).
                        </li>
                        <li>
                            <strong>The Third Pull</strong> – A sacred and final phase, divided into three parts:
                        </li>
                        <ul>
                            <li>
                                <strong>Speaking things into existence</strong> (as Moses commanded plagues and miracles).
                            </li>
                            <li>
                                <strong>Preaching to the eternally lost</strong> (as Jesus did before the Resurrection in 1 Peter).
                            </li>
                            <li>
                                <strong>Opening the Word</strong> (revealing mysteries hidden since the foundation of the world).
                            </li>
                        </ul>
                    </ol>
            </p>
            <p>
                Just like in Moses’ time, <strong>William Branham’s first two signs were impersonated</strong>, but the <strong>Third Pull was not meant to be a public demonstration</strong>—it was reserved for the elect, a secret work of God.
            </p>
            <h3>The Pillar of Fire and the Cloud</h3>
            <p>
                Both Moses and William Branham had ministries marked by supernatural manifestations of God's presence.
            </p>
            <p>
                The presence of the <strong>Pillar of Fire and the Cloud</strong> was central to Moses’ ministry. It led the Israelites by night and stood between them and their enemies. It was a divine witness that God was with His servant.
            </p>
            <p>
                Amazingly, <strong>William Branham’s ministry was also characterized by the same supernatural presence</strong>. The <strong>Pillar of Fire</strong> appeared with him multiple times, and a famous photograph taken in <strong>1950 in Houston, Texas</strong> , showed the divine Light hovering above his head. The Cloud that appeared in <strong>1963 in Arizona</strong>, just before he preached the opening of the Seven Seals, remains a mystery to science.
            </p>
            <h3>A Messenger of Deliverance</h3>
            <p>
                Just as <strong>Moses was sent to deliver Israel from Egypt</strong>, William Branham was sent to <strong>call God’s people out of religious systems and bring them into true spiritual freedom</strong>. His ministry <strong>restored the faith once delivered to the saints</strong>, emphasizing:
            </p>
            <p>
                    <ul>
                        <li>
                            The return to biblical truth, free from denominational creeds.
                        </li>
                        <li>
                            The supernatural leading of the Holy Spirit.
                        </li>
                        <li>
                            The revelation of God’s Word in its fullness.
                        </li>
                    </ul>
            </p>
            <h3>A Divine Pattern</h3>
            <p>
                The parallels between Moses and William Branham show a consistent pattern in how God sends deliverers in different ages. Both:
            </p>
            <p>
                    <ul>
                        <li>
                            <strong>Led an exodus</strong> (Moses: physical, Branham: spiritual).
                        </li>
                        <li>
                            <strong>Had three supernatural signs</strong> (two of which were impersonated).
                        </li>
                        <li>
                            Were accompanied by the <strong>Pillar of Fire and Cloud</strong> as divine confirmation.
                        </li>
                    </ul>
            </p>
            <p>
                Just as Moses led Israel to the Promised Land, William Branham’s ministry called believers back to the original faith, leading them into true spiritual freedom. His life and mission were part of God’s divine plan to restore His people before the Second Coming of Jesus Christ.
            </p>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={4} className="text-center">
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
                <h4 className="mb-4">The Endtime Moses in the Third Exodus</h4>
                <Button className='btn-sunday-school' variant="outline-danger" size="lg" onClick={goToMessenger}>
                Learn More
                </Button>
            </div>
            </Col>
        </Row>
        <br/>
        <br/>
        <hr/>
        </Container>
    </section>
  )
}

export default WilliamBranhamSecond
