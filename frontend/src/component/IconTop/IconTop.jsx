import React from 'react'
import $ from 'jquery'

export default function IconTop() {
  return <>
          <div class="icon-up" id="icon-top">
               
                <i class="fa-solid fa-chevron-up"></i>
             </div>
  </>
}
$('#icon-top').click(function() {
        $('#root').animate({ scrollTop: 0 });
        $('body').animate({ scrollTop: 0 });
        $('html').animate({ scrollTop: 0 });
      });
  
