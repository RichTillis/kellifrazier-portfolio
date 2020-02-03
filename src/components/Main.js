import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import kel1 from '../images/kel1.jpg'
import family from '../images/family.jpg'
import kel6 from '../images/kel6.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Educational Philosophy</h2>
          <span className="image main">
            <img src={kel1} alt="" />
          </span>
          <p>
            All students have a right to an equitable free and appropriate public education with 
            differentiated instruction to meet individual learning needs. The environment in which 
            students are taught should have a safe, encouraging atmosphere. Education should focus 
            on developing the whole child, teaching academic, social, and emotional learning for 
            all. An inherent culture of discourse, critical thinking, and independence should 
            exist. Learning should be made relevant to students’ lives and application of skills 
            practiced in multiple settings, not just in a classroom. All individuals, students, 
            staff, and families, should be encouraged to reflect on practice and growth. To lead 
            meaningful change, reflection should be on all levels of learning and guided by the 
            use of data to make an informed plan for change.
          </p>
          <p>
            Furthermore, I believe that every student has the ability to learn and be successful. 
            In order to create an atmosphere conducive to learning, students must feel comfortable 
            taking risks. Therefore, I strive to foster a school and classroom community where 
            students and families feel safe and supported. In addition, families and students each 
            bring a unique set of skills and experiences to the school and classroom and learn best 
            in varying ways due to different learning styles, interests, and preferences. I embrace 
            these differences and use them to strengthen learning experiences in my school and 
            classrooms. I set high expectations for each and every one of my staff members as well 
            as students, while providing the structure and guidance necessary to achieve success.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work History</h2>
          <span className="image main">
            <img src={kel6} alt="" />
          </span>
          <p>
            I began my career as a 4th grade teacher, then wanted to try 2nd grade. I was approached 
            my 6th year teaching to become our schools reading interventionist. Two years after being 
            the reading interventionist, the site principal wanted me to become the program 
            facilitator. I humbly accepted. Shortly after I moved to Mesa, AZ where I began my career 
            with Queen Creek Unified School District as Data specialist. I then became the Dean and 
            currently serve as the TOSA. I am a proud graduate of Northern Arizona University where 
            I earned a BA in Elementary Education, an MA in Educational Leadership.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={family} alt="" />
          </span>
          <p>
            I was born and grew up in the beautiful state of Texas. I grew up playing soccer and was 
            forced to do track (not my favorite). My husband, Michael, and I have three children, 
            Wyatt, Holden, and Nixon. We love the outdoors, hiking, camping, and being with my family. 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >          
          <h2 className="major">Contact Me</h2>
          <p>
            I was born and grew up in the beautiful state of Texas. I grew up playing soccer and was 
            forced to do track (not my favorite). My husband, Michael, and I have three children, 
            Wyatt, Holden, and Nixon. We love the outdoors, hiking, camping, and being with my family. 
          </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="kelli.k.frazier@gmail.com" className="icon fa-envelope">
                <span className="label">Facebook</span>
              </a>
            </li> 
            <li>
              <a href="https://www.linkedin.com/in/kelli-frazier" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Kelli_K_Frazier" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>                        
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
