import "./techstackStyles.css";
import React, {useEffect} from 'react'
import $ from 'jquery';
const techstack = () => {
    useEffect(()=>{
        $(document).ready(function () {
            function hex_initial_animation() {
                $(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
                $(".hex-wrap").velocity("callout.pulse");
                $(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
                }
            hex_initial_animation();
        
        var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
        function hovernotify() {
            $(".hover-notify").velocity("callout.tada");
        }
        function myStopFunction() {
        $(".hover-notify").velocity('stop', true).velocity("fadeOut");
            clearInterval(hoverdetect);
        }
        
                $(".hex-init").mouseenter(function () {
                    
                    myStopFunction();
        
                    var title_color =  $(this).parent().attr("data-color");
                    var title_name = $(this).parent().attr("data-title");
                    var desc_name = $(this).parent().attr("data-content");
        
                        function hex_description() {
                            $('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
                            $('.' + desc_name).siblings().removeClass('desc-active');
                                setTimeout(function() {
                                    $('.' + desc_name).addClass('desc-active');
                                    $('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
                                    $('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
                                    $('.code-title').text(title_name)
                                }, 0);
                        }
                        hex_description();
        
                        $(this).parent().addClass('hexactive'); 
                        $('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });
        
                    }).mouseleave(function () {
                         $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
                    });
        });
    })
  return (
    <div className="techy">

<section class="intro">

	<div class="intro-block">
		<div class="centerfold-wrap">
			<div class="hex-master-wrap">
					<div class="hover-notify">Hover Me!</div>
				<div class="grid-1">
					<div class="hex-wrap backend" data-title="BACKEND" data-content="backend-desc" data-color="#333333">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/3XjDZGJ.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap frontend" data-title="FRONTEND" data-content="frontend-desc" data-color="#16A085">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/f8WewU1.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-2">
					<div class="hex-wrap html" data-title="HTML5" data-content="html-desc" data-color="#E34C26">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/CHmGJ8M.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap css" data-title="CSS3" data-content="css-desc" data-color="#0083de">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/kUSks3I.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap jquery" data-title="JAVASCRIPT" data-content="javascript-desc" data-color="#8cc84b">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/5B9usMm.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-3">
					<div class="hex-wrap gui" data-title="USER INTERFACE" data-content="gui-desc" data-color="#2C3E52">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/3dXtbto.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
					<div class="hex-wrap seo" data-title="SEO" data-content="seo-desc" data-color="#C0392B">
							<div class="hex-init"></div>
							<div class="hex-borders">
								<div class="border-1"></div>
								<div class="border-2"></div>
								<div class="border-3"></div>
							</div>
							<div class="label"><img src="https://i.imgur.com/FkEYVo6.png"/></div>
						<div class="hexagon">
							<div class="hex-inner-1">
								<div class="hex-inner-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="code-display">
				<div class="code-description">
					<div class="backend-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>4 Years</p>
						<p><span>Experience</span>PHP, SQL, NodeJS, Ruby</p>
						<div class="code-icon"></div>
					</div>
					<div class="frontend-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>6 Years</p>
						<p><span>Experience</span>HTML, CSS, Javascript + Branches</p>
						<div class="code-icon"></div>
					</div>
					<div class="html-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>6 Years</p>
						<p><span>Experience</span>HTML5 (most recent)</p>
						<div class="code-icon"></div>
					</div>
					<div class="css-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>6 Years</p>
						<p><span>Experience</span>CSS3 (most recent)</p>
						<div class="code-icon"></div>
					</div>
					<div class="javascript-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>4 Years</p>
						<p><span>Experience</span>Javascript, Jquery, AngularJS, NodeJS</p>
						<div class="code-icon"></div>
					</div>
					<div class="gui-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>4 Years</p>
						<p><span>Experience</span>Wordpress, Custom GUI Creation</p>
						<div class="code-icon"></div>
					</div>
					<div class="seo-desc">
						<p class="code-title"></p>
						<p><span>Duration:</span>4 Years</p>
						<p><span>Experience</span>Up-to-date SEO Practices</p>
						<div class="code-icon"></div>
					</div>
				</div>

			</div>
				<div class="hoverblock"></div>
		</div>
	</div>

</section>
      
    </div>
  )
}

export default techstack
