import React from 'react'
import $ from 'jquery';
import './footer.css'
export default function Footer() {
  return <>
 <footer id="footer" className=''>
  <div className="d-flex align-items-center justify-content-center p-5">
    <p className="copyright  ">©2023 by Tasnim Talaat
    </p>
</div>

</footer>
  </>
}

$(document).ready(function(){
  // $('footer').fadeIn(1000,function(){
      $('.copyright').slideDown(1000)
         
  // })
})
