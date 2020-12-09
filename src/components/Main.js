import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import kel1 from '../images/kel1.jpg'
import family from '../images/kelFam.png'
import kel8 from '../images/kel8.jpg'

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
          <h2 className="major">My Career</h2>
          <span className="image main">
            <img src={kel8} alt="" />
          </span>
          <h3 className="major career-subheading">Education</h3>
          <p class="career-education">
            Master of Education, Educationl Leadership (2006), Northern Arizona University
          </p>
          <p>
            Bachelrs of Science, Education (2003), Northern Arizona University
          </p>
          <h3 className="major career-subheading">Career Summary</h3>
          <p class="career-summary">
          I began my career as a 4th grade teacher, then wanted to try 2nd grade. I was approached 
            my 6th year teaching to become our schools reading interventionist. Two years after being 
            the reading interventionist, the site principal wanted me to become the program 
            facilitator. I humbly accepted. Shortly after I moved to Mesa, AZ where I began my career 
            with Queen Creek Unified School District as Data specialist. I then became the Dean of Students. I 
            am currently serving QCUSD as the Data Specialist.
          </p>
          <h3 className="major career-subheading">Career Progression</h3>
          <div class="career">
            <p class="career-title">Data Specialist</p>
            <p class="career-employer">Queen Creek Unified School District</p>
            <p class="career-timeline">2019 — Present</p>
          </div>
          
          <div>
            <p class="career-title">Dean of Students</p>
            <p class="career-employer">Queen Creek Unified School District</p>
            <p class="career-timeline">2017 — 2019</p>
          </div>

          <div>
            <p class="career-title">Reading Specialist</p>
            <p class="career-employer">Queen Creek Unified School District</p>
            <p class="career-timeline">2014 — 2016</p>
          </div>

          <div>
            <p class="career-title">Configuration Analyst</p>
            <p class="career-employer">Raytheon Company</p>
            <p class="career-timeline">2013 — 2014</p>
          </div>

          <div>
            <p class="career-title">Title One Facilitator</p>
            <p class="career-employer">Sunnyside Unified School District</p>
            <p class="career-timeline">2011 — 2013</p>
          </div>

          <div>
            <p class="career-title">Academic Interventionist</p>
            <p class="career-employer">Sunnyside Unified School District</p>
            <p class="career-timeline">2010 — 2011</p>
          </div>

          <div>
            <p class="career-title">Teacher</p>
            <p class="career-employer">Sunnyside Unified School District</p>
            <p class="career-timeline">2004 — 2010</p>
          </div>

          Find more career info on my <a href="https://www.linkedin.com/in/kelli-frazier/" target="_blank" rel="noopener">LinkedIn</a> profile.

          {close}
        </article>

        <article
          id="references"
          className={`${this.props.article === 'references' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume & References</h2>
          <span className="image main">
            <img src={family} alt="" />
          </span>
          
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
            Please feel free to reach out! You can also contact me via the email or message me on LinkedIn. I look forward to hearing from you. 
          </p>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
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
              <a href="mailto:kelli.k.frazier@gmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
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
