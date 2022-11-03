import React from 'react'
import './LandingSection.css'

function LandingSection() {
  return (
    <section className="h-100 w-100 d-flex align-items-center  landing-section">
        <div className="content-container d-flex flex-column gap-md-3">
				<h1 className="text-white">
					<span className="small mb-5">
						<span className="blue-text theme-color">Hi</span>, I am <br/>
					</span>
				
					<span className="name theme-color">Siyabonga Sishi</span>
				</h1>
				<p className="text-white about-text lead">
				I enjoy creating awesome apps. 				</p>
				<div
					className="home-buttons mt-3 d-flex gap-2 gap-md-4 flex-row justify-content-center justify-content-md-start">
					<a href='#contact-container'	> 
					<button className="contact-btn theme-border-color background">Contact Me</button>

					</a>
				</div>
			</div>
    </section>
  )
}

export default LandingSection