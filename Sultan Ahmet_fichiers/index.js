var $oPic;
var $oPicPool;

var o_fullscreen;
var o_drink;
var o_dining;
var o_ziqu;
var o_pool;
var o_romantic;
var o_lifestyle;

var v_fullscreen = false;
var v_offset = false;
var v_drink = false;
var v_dining = false;
var v_ziqu = false;
var v_pool = false;
var v_romantic = false;
var v_lifestyle = false;
var v_blocklist = false;


$startDelta = 140;



function index_ready() {
	$oPic = $('.fullscreen_pic img')[0];
	$oPicPool = $('.fullscreen_pic img')[1];
	if(isHandheld && windowWidth < 960){
		$startDelta = 1;
	}
}


function index_load () {
	
	// getMagazineArticle();
	
}

function set_offset() {
	
	autosize($('.top_img img'));	
	autosize($('.fullscreen_pic:eq(0) img'));
	autosize($('.fullscreen_pic:eq(1) img'));
	
	  $('.lifestyle_articles .lifestyle_article').each(function(l){
		 autosize( $('.lifestyle_articles .lifestyle_article:eq('+l+') img'));

	  })
	
	o_parallax = $('section.fullscreen').position().top - windowHeight;
	//o_pparallax = $('section.pool').position().top - windowHeight;
	$oPicHeight = windowHeight;
	if(!isHandheld) {
	$oPic.style[$$transform[0]] = 'translate3d(0,'+(-$oPicHeight-((o_parallax - windowHeight)-pageY)/2)+'px, 0)';
	}
	$oPicPoolHeight = windowHeight;
	//$oPicPool.style[$$transform[0]] = 'translate3d(0,'+(-$oPicPoolHeight-((o_pparallax - windowHeight)-pageY)/2)+'px, 0)';

	o_fullscreen = $('section.fullscreen').position().top - 100;
	o_drink = $('section.welcome_drink').position().top - scrollThreshold_1_3;
	o_dining = $('section.fine_dining').position().top - scrollThreshold_1_3;
	o_ziqu = $('.paragraph.ziqu').position().top + o_dining + 100;
	//o_pool = $('.pool .left_block_offset').position().top - scrollThreshold_1_3;
	o_romantic = $('section.romantic').position().top  - scrollThreshold_1_5;
	//o_lifestyle = $('section.lifestyle').position().top  - scrollThreshold_2;
	o_blocklist = $('section.block_list').position().top  - scrollThreshold_2;

}


function index_scroll (){
		if(!v_offset && pageY > $startDelta){
			v_offset = true;
			$('.paragraph.right.offset .paragraph_body').removeClass('hidden');
			setTimeout(function(){
				$('.first_letter').removeClass('hidden');
			},300)
			setTimeout(function(){
				$('.text_first_letter').removeClass('hidden');
			},450)
			
			setTimeout(function(){
				$('p.welcome').removeClass('no_opacity');
				$('.paragraph_body .body_text').removeClass('top_hidden');

			},500)
			
			
		}
		
		if(!v_fullscreen && pageY > o_fullscreen){
			showSquareLabel($('.welcome_drink .line_set._1'));
		}
		
		if(!v_drink && pageY > o_drink){
			$('.small_offset').removeClass('hidden')
			
			$('.welcome_drink .paragraph_title:eq(0)').removeClass('left_translated') ;
			setTimeout(function(){
				$('.welcome_drink .paragraph_title:eq(1)').removeClass('left_translated') ;
				
			},100)
			setTimeout(function(){
				$('.welcome_drink .body_text').removeClass('top_double') ;
			},400);
			
			
			
			setTimeout(function(){
				$('.welcome_drink .pic_right .cover, .welcome_drink .pic_right .content').removeClass('hidden')
				show_lineset_2();
				$(' .welcome_drink .pic_right').removeClass('top_translated');


			},400)
			
			setTimeout(function(){
				$('.welcome_drink .pic_left .cover, .welcome_drink .pic_left .content').removeClass('hidden')
				$('.welcome_drink .pic_left').removeClass('top_translated');
			},200)
			
			
			
			
		}
		
		if(!v_blocklist && pageY > o_blocklist){
			
			$v_blocklist = true;
			$('.block').each(function(b){
				setTimeout(function(){
					$('.block:eq('+b+') .block_pic .cover').removeClass('hidden');
				},100*b)
				
				setTimeout(function(){
					$('.block:eq('+b+') .block_copy').removeClass('hidden_by_scaling_low');
				},600+(100*b))
				
				setTimeout(function(){
					$('.block:eq('+b+') .block_copy .block_text').removeClass('top_double');
				},800+(100*b))
			})
		}
		
		if(!v_dining && pageY > o_dining){
			v_dining = true;
			$('.fine_dining .paragraph_title.type_2').removeClass('top_hidden');
			setTimeout(function(){
				$('.fine_dining .paragraph_subtitle').removeClass('top_hidden');
			},200)
			setTimeout(function(){
				$('.fine_dining .rect_pic .cover, .fine_dining .rect_pic .content').removeClass('hidden')
				$('.fine_dining .rect_pic').removeClass('top_translated');

			},400)
		}
		if(!v_ziqu && pageY > o_ziqu){
			v_ziqu = true;
			$('.ziqu .body_text').removeClass('top_hidden');
			setTimeout(function(){
				$('.fine_dining .pic_right .content,.fine_dining .pic_right .cover').removeClass('hidden')
				$('.fine_dining .pic_right').removeClass('top_translated')
				
			},200)
			setTimeout(function(){
				$('.fine_dining .pic_left .content,.fine_dining .pic_left .cover').removeClass('hidden')

				$('.fine_dining .pic_left').removeClass('top_translated_full')

			},200)
		}
		
		
		if(!v_pool && pageY > o_pool){
			v_pool = true;
			$('.pool .left_block_offset').removeClass('hidden');
			setTimeout(function(){
				$('.pool .left_block_offset .paragraph_title').removeClass('top_hidden');
				$('.pool .paragraph_pic .cover, .pool .paragraph_pic .content').removeClass('hidden');

			},300)
			
		}
		
		if(!v_romantic && pageY > o_romantic){
			v_romantic = true;
			$('.romantic .paragraph_title').removeClass('top_double');
			setTimeout(function(){
				$('.romantic .paragraph_subtitle').removeClass('top_double');
			},100)
			setTimeout(function(){
				$('.romantic_pic').removeClass('hidden');
			},300);
			
		
			
			
			
		}
	
		if(!v_lifestyle && pageY > o_lifestyle){
			v_lifestyle = true;
			
			$('.line_title .line').removeClass('no_width');
			$('.line_title .cover, .line_title .content').removeClass('hidden');
			
			setTimeout(function(){
				$('.lifestyle_article:eq(0) .cover,.lifestyle_article:eq(0) .content').removeClass('hidden');
			},200)
			
			setTimeout(function(){
				$('.lifestyle_article:eq(1) .cover,.lifestyle_article:eq(1) .content').removeClass('hidden');
			},400)
			
				setTimeout(function(){
				$('.lifestyle_article:eq(2) .cover,.lifestyle_article:eq(2) .content').removeClass('hidden');
			},600)
		}
	
		
		if($parallax && pageY >= o_parallax - windowHeight && pageY <= o_parallax + windowHeight + $oPicHeight + 100){
			$oPic.style[$$transform[0]] = 'translate3d(0,'+(-$oPicHeight-((o_parallax - windowHeight)-pageY)/2)+'px, 0)';
		}
		
		/*if($parallax && pageY >= o_pparallax - windowHeight && pageY <= o_pparallax + windowHeight + $oPicPoolHeight + 100){
			$oPicPool.style[$$transform[0]] = 'translate3d(0,'+(-$oPicPoolHeight-((o_pparallax - windowHeight)-pageY)/2)+'px, 0)';
		}*/
}

function show_lineset_2() {
	$('.square.shifted.first',$('.line_set._2')).removeClass('hidden_by_scaling_full');
	setTimeout(function(){
		$('.square.shifted.first .inline',$('.line_set._2')).removeClass('hidden_by_scaling_full');
		$('.line.first',$('.line_set._2')).removeClass('hidden');

	},200)
	
	setTimeout(function(){
		$('.start_square',$('.line_set._2')).removeClass('hidden_by_scaling_full');
	},350)
	setTimeout(function(){
		$('.line._2',$('.line_set._2')).removeClass('hidden');
	},850);
	setTimeout(function(){
		$('.line.last',$('.line_set._2')).removeClass('hidden');
	},1650);
	
	setTimeout(function(){
		showSquareLabel($('.welcome_drink .line_set._2'));

	},1700);
	
	
}



