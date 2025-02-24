import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SeniorImage from '../../../../../media/sundayschool/senior-sunday-school-2.jpg';
import './WilliamBranhamThird.css'

const WilliamBranhamThird = () => {

    const goToMessenger = () => {
        window.open('https://themessage.com/messenger2', '_blank')
    };

  return (
    <section className='william-branham-third-section'>
        <Container>
            <Row>
                {/* Left Column */}
                <Col xs={12} md={8} className='william-branham-third-left-col'>
                <h1>William Branham and Jesus Christ: A Parallel of the Messianic Sign</h1>
                <p>
                    Moses, the great prophet of the Old Testament, made a profound prophecy in <strong>Deuteronomy 18:15</strong>, saying, <i>“The Lord your God will raise up for you a Prophet like me from among your brethren.”</i> This prophecy had a dual fulfillment—it pointed to both <strong>Jesus Christ</strong> and <strong>William Branham</strong>, two men whose lives and ministries bore striking similarities to that of Moses.
                </p>
                <p>
                    Moses led <strong>the first exodus</strong>—delivering Israel from physical bondage in Egypt. <strong>Jesus Christ led the third exodus</strong>, taking people from the bondage of the Law into the grace of salvation. And in the <strong>last days, William Branham’s ministry ushered in the third exodus</strong>, calling believers out of denominational confusion into the true liberty of the Holy Ghost.
                </p>
                <h3>The Messianic Sign: Revealing the Secrets of the Heart</h3>
                <p>
                    One of the greatest proofs of Jesus’ divine commission was the <strong>Messianic sign</strong>—the supernatural ability to discern the <strong>secrets of the heart</strong>.
                </p>
                <p>
                    During His ministry, Jesus demonstrated this sign to two groups of people:
                </p>
                <p>
                        <ol>
                            <li>
                                <strong>The Jews</strong> (John 1:47-49 – Jesus told Nathanael, <i>“Before Philip called you, when you were under the fig tree, I saw you.”</i>)
                            </li>
                            <li>
                                <strong>The Samaritans</strong> (John 4:16-19 – Jesus told the Samaritan woman, “You have had five husbands, and the one you now have is not your husband.”)
                            </li>
                        </ol>
                </p>
                <p>
                    However, <strong>there is no recorded instance of Jesus performing the Messianic sign for the Gentiles</strong>. Since Jesus came to redeem all three kinds of people on earth—Jews, Samaritans, and Gentiles—this means that the <strong>Messianic sign was yet to be fulfilled among the Gentiles</strong>.
                </p>
                <h3>The Messianic Sign to the Gentiles in Genesis 18</h3>
                <p>
                    To understand how Jesus would reveal the <strong>Messianic sign to the Gentiles</strong>, we must look at how God worked in the past. <strong>In Genesis 18</strong>, a mysterious <strong>Man appeared to Abraham</strong>, who was a Gentile. This Man had <strong>supernatural knowledge</strong> and asked:
                </p>
                <p>
                    <i>
                        “Where is Sarah, your wife?”
                    </i>
                </p>
                <p>
                    This question was significant because:
                </p>
                <p>
                    <ul>
                        <li>
                            <strong>The Man knew Abraham’s wife’s name</strong>, even though they had just met.
                        </li>
                        <li>
                            <strong>He also knew Abraham’s name had changed from Abram to Abraham</strong>.
                        </li>
                        <li>
                            This revealed that the <strong>Man was none other than God Himself, manifesting in a human form</strong>.
                        </li>
                    </ul>
                </p>
                <p>
                    This was <strong>the last sign</strong> God gave Abraham before the destruction of <strong>Sodom and Gomorrah by fire</strong>. This event serves as a <strong>spiritual type</strong>—a foreshadowing of the <strong>last days</strong>, when God would again send a prophet with the <strong>Messianic sign</strong> before the world faces its final judgment.
                </p>
                <h4>William Branham: The Last-Day Messenger</h4>
                <p>
                    The Bible prophesied in <strong>Malachi 4:5-6</strong> that before the great and dreadful day of the Lord, <strong>God would send Elijah</strong> to turn the hearts of the people back to God. In this age, <strong>William Branham came in the spirit of Elijah</strong>, bearing the same supernatural ministry.
                </p>
                <p>
                        <ul>
                            <li>
                                Just as Jesus discerned the hearts of the Jews and Samaritans, <strong>William Branham discerned the hearts of the Gentiles</strong>.
                            </li>
                            <li>
                                Just as God in Genesis 18 knew Abraham’s secrets, <strong>William Branham called out names, illnesses, and personal details about people he had never met.</strong>
                            </li>
                            <li>
                                This was the fulfillment of <strong>the Messianic sign to the Gentiles</strong>, proving that Jesus is the <strong>same yesterday, today, and forever</strong> (Hebrews 13:8).
                            </li>
                        </ul>
                </p>
                <h4>A Warning Before Judgment</h4>
                <p>
                    Genesis 18 shows that the <strong>Messianic sign to Abraham</strong> was the <strong>final warning before fire fell on Sodom and Gomorrah</strong>. In the same way, <strong>William Branham’s ministry came as the last prophetic warning before the coming judgment by fire upon the earth</strong>.
                </p>
                <p>
                    His message was clear:
                </p>
                <p>
                        <ol>
                            <li>
                                Return to the original faith.
                            </li>
                            <li>
                                Separate from denominational confusion.
                            </li>
                            <li>
                                Prepare for the coming of the Lord.
                            </li>
                        </ol>
                </p>
                <p>
                    Just as <strong>Jesus did not perform the Messianic sign to the Gentiles in His earthly body</strong>, He <strong>fulfilled it in the last days through William Branham</strong>, showing that He is still the same God working through His prophets.
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

export default WilliamBranhamThird
