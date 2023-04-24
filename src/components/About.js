import { Container, Row, Col } from "react-bootstrap";
import 'animate.css'
import { motion } from 'framer-motion'
import Button_Scroll from "./Button_Scroll";

const textAnimation = {
hidden:{
    x: -100,
    opacity: 0,
    rotate: -5,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {delay : custom * 0.2, duration: 1.5},
  }),
}

const textAnimation2 ={
  hidden:{
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay : custom * 0.4, duration:1.5},
  }),
}

const headerAnimation= {
  hidden:{
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: {delay : custom * 0.1, duration:1.5},
  }), 
}

export const About = () => {

  return(
    <motion.section 
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.5,}}
    classname='About' id='Abouts'
    >
      <Container>
        <Row>
          <Col>
          <motion.div custom={1} variants={headerAnimation} className ='about_h' id='about_hea'>
            <h2>
              About Me
            </h2>
          </motion.div>
          <div class='box'>
            <motion.div custom={3} variants={textAnimation} className="about">
            <p>Hi  my name is Dmitry, i`m beginner python developer.<br></br>I studied at the College for 4 years and programmed in C, C++ and studied to be a network engineer for 4 years in institution.<br></br>Recently I was preparing for the Lpic 1-101 Lpic 1-102 Lpic 2-101 Lpic 2-102 program, but I did not close the certificates because there was no opportunity. And now I programming in Python (Telegram Bots, API, Lgic) and Al/Machine learning projects</p>
          </motion.div>
            <div className='about2' id='abouts2'>
                <motion.div custom={4} variants={textAnimation2} className="about3">
                <p>I have always dreamed of creating innovative solutions in the field of machine learning, and if given the chance, I will do everything in my power to turn my dreams into reality.<br></br>
                    I have the knowledge and experience in machine learning that has allowed me to develop solutions using the latest technologies.<br></br>
                    I`m ready to use my skills and knowledge to help you achieve maximum results. I`m confident that together we can grow and reach new heights. </p>
              </motion.div>
            </div>
            </div>
            <Button_Scroll />
          </Col>
        </Row>
      </Container>
    </motion.section>
  )
}
