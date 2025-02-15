import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import SeniorImage from '../../../../../media/sundayschool/senior-sunday-school-2.jpg';
import './WilliamBranhamFourth.css'

const WilliamBranhamFourth = () => {
  return (
    <section className='william-branham-fourth-section'>
        <Container>
            <Row>
                {/* Left Column */}
                <Col xs={12} md={8} className='william-branham-fourth-left-col'>
                <h1>Interesting Facts About William Branham and the Jewish Calendar</h1>
                <p>
                    William Branham’s life and ministry were marked by <strong>remarkable alignments with the Jewish calendar</strong>, reinforcing the prophetic nature of his calling. From his birth to his passing, the key dates associated with his ministry hold deep <strong>biblical and prophetic significance</strong>, linking him to <strong>Jesus Christ, the Exodus, and the prophetic timeline of Israel.</strong>
                </p>
                <h3>1. Birth on Passover Night (April 6, 1909 – 15th Nisan 5669)</h3>
                <p>
                    William Branham was born on <strong>April 6, 1909</strong>, which corresponds to <strong>15th Nisan 5669</strong> on the Jewish calendar. This date is significant because:
                </p>
                <p>
                    <ul>
                        <li>It was the exact night of <strong>Passover</strong>, the same day that Jesus Christ was crucified in <strong>AD 30</strong>.</li>
                        <li>Passover commemorates the <strong>Exodus from Egypt</strong>, when Israel was delivered from bondage—foreshadowing Branham’s later ministry.</li>
                        <li>According to John’s Gospel, Jesus and His disciples <strong>celebrated the Passover meal</strong> before His arrest and crucifixion on the same date.</li>
                    </ul>
                </p>
                <h3>2. Angelic Visitation and Commission (May 7, 1946 – 6th Iyyar 5706)</h3>
                <p>
                    Another pivotal moment in Branham’s life was <strong>May 7, 1946</strong>, when an <strong>angel visited him and commissioned him for his healing ministry</strong>. On the Jewish calendar, this date was:
                </p>
                <p>
                    <ul>
                        <li><strong>6th Iyyar 5706</strong>, which was <strong>the 21st day of the Omer counting toward Pentecost.</strong></li>
                        <li><strong>Parshat Emor</strong>, the Torah portion that deals with the <strong>priesthood, holy convocations, and divine appointments.</strong></li>
                    </ul>
                </p>
                <h3>3. The Fatal Accident and the 24th of Kislev (December 18, 1965 – Kislev 24, 5726)</h3>
                <p>
                    William Branham’s tragic car accident occurred on <strong>December 18, 1965</strong>, which was:
                </p>
                <p>
                    <ul>
                        <li><strong>The 24th day of Kislev (9th month on the Jewish calendar)</strong>.</li>
                        <li><strong>The day the foundation of the fourth Temple was laid</strong>, as recorded in <strong>Haggai 2:18</strong>.</li>
                        <li>The beginning of <strong>Hanukkah</strong>, the Jewish Festival of Lights.</li>
                    </ul>
                </p>
                
                <h3>4. Passing Away on Rosh Chodesh Tevet (December 24, 1965 – 1st Tevet 5726)</h3>
                <p>
                    Branham succumbed to his injuries on <strong>December 24, 1965</strong>, which was:
                </p>
                <p>
                    <ul>
                        <li><strong>Rosh Chodesh Tevet</strong>, the beginning of the 10th month in the Jewish calendar.</li>
                        <li>The <strong>sixth day of the Jewish counting of the Omer</strong>, leading up to Pentecost.</li>
                        <li><strong>The night before Christmas</strong>, when the Christian world remembers the birth of Jesus Christ.</li>
                    </ul>
                </p>
                <h3>5. Burial on Passover Shemini (April 11, 1966 – 21st Nisan 5726)</h3>
                <p>
                    Branham’s burial took place on <strong>April 11, 1966</strong>, which was:
                </p>
                <p>
                    <ul>
                        <li><strong>21st Nisan</strong>, the last day of Passover.</li>
                        <li>Known as <strong>Passover Shemini (8th Day)</strong>—a special observance in the Jewish diaspora.</li>
                    </ul>
                </p>
                <h4>A Prophetic Life Written in the Heavens</h4>
                <p>
                    The alignment of William Branham’s birth, angelic commission, accident, death, and burial with key biblical dates suggests that <strong>his life was a prophetic sign in itself.</strong>
                </p>
                <p>
                    <ul>
                        <li><strong>Born on Passover</strong> (Jesus’ crucifixion date).</li>
                        <li><strong>Died at Hanukkah</strong> (the festival of dedication).</li>
                        <li><strong>Accident on Kislev 24</strong> (when the Temple foundation was laid).</li>
                        <li><strong>Buried on Passover Shemini</strong> (final day of Israel’s deliverance from Egypt).</li>
                    </ul>
                </p>
                <p>
                    Many believe these dates confirm that <strong>Branham was a fulfillment of Malachi 4, the Elijah messenger sent to restore the faith before the coming judgment.</strong>
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
                    <h4 className="mb-4">A Life Marked by Prophetic Timing</h4>
                    <Button className='btn-sunday-school' variant="outline-danger" size="lg">
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

export default WilliamBranhamFourth
