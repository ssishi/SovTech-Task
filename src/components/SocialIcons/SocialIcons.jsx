import React from 'react'
import './SocialIcons.css'

function SocialIcons() {
  return (
    <ul class="h-100 position-fixed px-4 d-flex list-unstyled gap-3 flex-column justify-content-center">
        <li>
            <i class="bi bi-github"></i>
        </li>
        <li>
            <i class="bi bi-linkedin"></i>
        </li>
        <li>
            <i class="bi bi-discord"></i>
        </li>
        <li>
            <i class="bi bi-twitter"></i>
        </li>
    </ul>
  )
}

export default SocialIcons