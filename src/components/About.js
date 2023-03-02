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
            <p>Hi, my name is Dmitry, i'm python developer.<br></br>I am cool.</p>
          </motion.div>
            <div className='about2' id='abouts2'>
                <motion.div custom={4} variants={textAnimation2} className="about3">
                <p>.<br></br>.</p>
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
