import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="h-100 w-100 d-flex align-items-center justify-content-center" id="#about-section">
        <div className="about-container w-75 h-75 py-3">
				<i class="bi bi-gear icon1 theme-color"></i>
				<p className='paragraph1'>
					I am a junior full-stack developer. I am skilled in test-driven development,
					analysis, problem-solving, and Object Orientated programming. I also know Python,
					JavaScript, Java, Git, HTML, CSS, and mobile application development with flutter
					and dart.
				</p>
			
				<i class="bi bi-code-slash icon2 theme-color"></i>
				<p className='paragraph2'>
					Testing, Maven, Docker, SQL procedural programming, and pipelines are examples of technologies
					that I am familiar with. I consider it an honor and a privilege to be able to actively 
					contribute to South Africa's fourth industrial revolution as a software developer.
				</p>
			
			
				<i class="bi bi-search icon3 theme-color"></i>
				<p className='paragraph3'>
					Researching tech-related subjects like data-analytics, cybersecurity, telecom, finance,
					and insurance is something I like doing.
				</p>

				<div className="reason">
					<h2 className="mt-3 theme-color mb-3">Why I want to join SovTech?</h2>
					<p className='reason-paragraph'>
						I want to join SovTech because of this. You have won numerous industry awards and are top of custom 
						software development firm in the world. You create specialized web, mobile, and cloud software 
						applications that support business growth.
						<br/><br/>
						You've been successful for more than ten years and are familiar with how software functions in 
						many different businesses. You are aware that many clients struggle with platform expansion and 
						development capacity. Your multidisciplinary teams are focused on developing scalable products 
						that serve growth-oriented enterprises and are made up of tech enthusiasts with top-tier and
						diverse development knowledge. 
						<br/><br/>
 						Your purpose is to create, develop, implement, and support cutting-edge custom software that 
						allows your clients the chance to launch, manage, and expand world-class businesses, and I relate
						to all of them, which is why I adore your spex.
					</p>
				</div>
		</div>
    </section>
  )
}

export default AboutSection