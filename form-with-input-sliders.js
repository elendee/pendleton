<script>

var cache = 5

var pef = {
	// the DOM element
	base_price: 1000,
	final:{
		header: '<h3>All set:</h3>',
		prompt: '<h3>Like what you see?</h3>',
		// contact_html: 'Send us an email to be on your way to a beatiful custom designed landscape. <br> <div id="pef-final-email"><a href="mailto:office@pendletondm.com">office@pendletondm.com</a><div id="pef-copy-success"></div></div>',
		contact_html: 'Fill out some brief personal information to be on your way to a beatiful custom designed landscape. <br>',
		// submit_html: 'Click submit to send us your information thus far and be on your way to a beatiful custom designed landscape.',
		name_html: '<input name="pef-name-input" id="pef-final-input-name" type="text" placeholder="name" onblur="this.placeholder=\'name\'" onfocus="this.placeholder=\'\'">',
		email_html: '<input name="pef-email-input" id="pef-final-input-email" type="text" placeholder="email" onblur="this.placeholder=\'email\'" onfocus="this.placeholder=\'\'">',
		state_html: '<input name="pef-state-input" id="pef-final-input-state" type="text" placeholder="state of residence" onblur="this.placeholder=\'state of residence\'" onfocus="this.placeholder=\'\'">'
		// name_html: '<input name="pef-name-input" id="pef-final-input-name" >',
		// name_html: '<input>',
		// email_html: '<input name="pef-email-input" id="pef-final-input-email" placeholder="email" onblur="this.placeholder=\'email\'" onfocus="this.placeholder=\'\'">',
		// state_html: '<input name="pef-state-input" id="pef-final-input-state" placeholder="state of residence" onblur="this.placeholder=\'state of residence\'" onfocus="this.placeholder=\'\'">'
	},
	$form:{},
	$submit_wrapper:{},
	$name_input:{},
	$email_input:{},
	$state_input:{},
	// my representation 
	step_formdata:{}, 
	step_presets:{
		property:{
			img:[
				'https://okonno.com/serv/pendleton/images/property/round3/1-4_1-2.jpg?v=' + cache,
				'https://okonno.com/serv/pendleton/images/property/round3/1-2_3-4.jpg?v=' + cache,
				'https://okonno.com/serv/pendleton/images/property/round3/3-4_1.jpg?v=' + cache,
				'https://okonno.com/serv/pendleton/images/property/round3/1-2.jpg?v=' + cache,
				'https://okonno.com/serv/pendleton/images/property/round3/2-3.jpg?v=' + cache,
				'https://okonno.com/serv/pendleton/images/property/round3/3+.jpg?v=' + cache
			],
			callback: function(event, slider, $step, num_options){
				var x = Math.max(event.offsetX, 1)
				// update_slider(slider, x)

				// var selected = map_click_to_int(x, slider, num_options)
				var selected = map_click_to_notch(x, slider, num_options)

				console.log('selected: ', selected)
				knob_to_interval(slider, x, selected, num_options)
				var the_vis = $step.find('.pef-visual')[selected]
				var the_input = $(the_vis).attr('data-vis_id')
				toggle_slider_vis($step, the_vis)
				$step.find('.option input').each(function(){
					$(this).prop('checked', false).change()
				})
				$('#'+the_input).prop('checked', true).change()
				// for(i=0; i<$(ele).siblings().length; i++){
				// 	click_deselect($(ele).siblings()[i])
				// }
				// click_select(ele)
			}
			// html:'some properteez'
		},
		elevation:{
			img:[
				'https://okonno.com/serv/pendleton/images/ele/topo5.jpg',
				'https://okonno.com/serv/pendleton/images/ele/topo4.jpg',
				'https://okonno.com/serv/pendleton/images/ele/topo3.jpg',
				'https://okonno.com/serv/pendleton/images/ele/topo2.jpg',			
				'https://okonno.com/serv/pendleton/images/ele/topo.jpg'
				// 'https://okonno.com/serv/pendleton/images/',
				// 'https://okonno.com/serv/pendleton/images/',
				// 'https://okonno.com/serv/pendleton/images/',
				// 'https://okonno.com/serv/pendleton/images/'
			],
			callback: function(event, slider, $step, num_options){
				var x = Math.max(event.offsetX, 1)
				update_slider(slider, x)
				var selected = map_click_to_int(x, slider, num_options)
				var the_vis = $step.find('.pef-visual')[selected]
				var the_input = $(the_vis).attr('data-vis_id')
				toggle_slider_vis($step, the_vis)

				$step.find('.option input').each(function(){
					$(this).prop('checked', false).change()
				})

				$('#'+the_input).prop('checked', true).change()
				// for(i=0; i<$(ele).siblings().length; i++){
				// 	click_deselect($(ele).siblings()[i])
				// }
				// click_select(ele)
			}
			// html:'some elevationz'
		},
		tree:{
			img:[
				'https://okonno.com/serv/pendleton/images/veg/veg_base.png',
				'https://okonno.com/serv/pendleton/images/veg/veg_ten-twenty-five.png',
				'https://okonno.com/serv/pendleton/images/veg/veg_twenty-five-fifty.png',
				'https://okonno.com/serv/pendleton/images/veg/veg_fifty-seventy-five.png',
				'https://okonno.com/serv/pendleton/images/veg/veg_seventy-five-plus.png'

				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(event, slider, $step, num_options){
				var x = Math.max(event.offsetX, 1)
				update_slider(slider, x)
				var selected = map_click_to_int(x, slider, num_options)
				var the_vis = $step.find('.pef-visual')[selected]
				var the_input = $(the_vis).attr('data-vis_id')
				toggle_slider_vis($step, the_vis)
				$step.find('.option input').each(function(){
					$(this).prop('checked', false).change()
				})

				$('#'+the_input).prop('checked', true).change()
				// for(i=0; i<$(ele).siblings().length; i++){
				// 	click_deselect($(ele).siblings()[i])
				// }
				// click_select(ele)
			}
			// html:'some veggies'
		},
		elements:{
			img:[
				'https://okonno.com/serv/pendleton/images/icons/waterfall.png',
				'https://okonno.com/serv/pendleton/images/icons/patio.png',
				'https://okonno.com/serv/pendleton/images/icons/firepit2.png',
				'https://okonno.com/serv/pendleton/images/icons/pond4.png',
				'https://okonno.com/serv/pendleton/images/icons/pathway.png',
				'https://okonno.com/serv/pendleton/images/icons/tennis.png',
				'https://okonno.com/serv/pendleton/images/icons/pool2.png',
				'https://okonno.com/serv/pendleton/images/icons/kitchen.png',
				'https://okonno.com/serv/pendleton/images/icons/idea.png'
			],
			callback: function(ele){
				toggle_click(ele)
				// if($(ele).hasClass('pef-highlighted')){
				// 	$(ele).removeClass('pef-highlighted')
				// 	var id = $(ele).attr('data-vis_id')
				// 	$('#'+id).prop('checked', false).change()
				// }else{
				// 	$(ele).addClass('pef-highlighted')
				// 	var id = $(ele).attr('data-vis_id')
				// 	$('#'+id).prop('checked', true).change()
				// }
			}
			// html:'some eles'
		},
		style:{
			img:[
				'http://okonno.com/serv/pendleton/images/styles/formal.jpg',
				'http://okonno.com/serv/pendleton/images/styles/japanese.jpg',
				'http://okonno.com/serv/pendleton/images/styles/natural.jpg',
				'http://okonno.com/serv/pendleton/images/styles/undecided.jpg',
			],
			callback: function(ele){
				toggle_click(ele)
				// if($(ele).hasClass('pef-highlighted')){
				// 	$(ele).removeClass('pef-highlighted')
				// 	var id = $(ele).attr('data-vis_id')
				// 	$('#'+id).prop('checked', false).change()
				// }else{
				// 	$(ele).addClass('pef-highlighted')
				// 	var id = $(ele).attr('data-vis_id')
				// 	$('#'+id).prop('checked', true).change()
				// }
			}
			// html:'stylezzzz'
		}
	},
	total: 0
}


var nav_buttons = '<div class="pef-nav"><div class="pef-back">BACK</div><div class="pef-forward">NEXT</div></div>'

var js_loaded = {
	jq: false,
	jqui: false,
	jqtp: false
}

var jq = document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(jq);

jq.onload=function(){
	var jqui = document.createElement('script');
	document.getElementsByTagName('head')[0].appendChild(jqui);
	jqui.onload=function(){
		var jqtp = document.createElement('script');
		document.getElementsByTagName('head')[0].appendChild(jqtp);
		jqtp.onload=function(){
			// js_loaded[jq]=true
			// var t = check_js_init()
			// if(t){console.log('blastoff'); init_pef()}
			init_pef()
		}
		jqtp.src = 'https://okonno.com/serv/jquery-touch-punch.min.js';
		// js_loaded[jq]=true
		// var t = check_js_init()
		// if(t){console.log('blastoff'); init_pef()}
	}
	jqui.src = 'https://code.jquery.com/ui/1.12.0/jquery-ui.min.js';
	// js_loaded[jq]=true
	// var t = check_js_init()
	// if(t){console.log('blastoff'); init_pef()}
}

jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";






function check_js_init(){
	var test = true
	for(js in js_loaded){
		if(!js_loaded[js]){
			test = false
		}
	}
	return test
}


function init_pef(){


	// if(window.location.href.match(/config/i)){
	// 	console.log('matchchchch, NOT appending style')
	// 	$('#okonno-css').remove()
	// }else{
	// 	console.log('NO config, appending style: url: ' + window.location.href)
	// 	$(document.head).append('<link id="okonno-css" rel="stylesheet" href="https://okonno.com/serv/pendleton/icon-style.css?v=' + cache + '">');	
	// }

	$(document.head).append('<link id="okonno-css" rel="stylesheet" href="https://okonno.com/serv/pendleton/icon-style.css?v=' + cache + '">');	

	

	pef.$form = $('form')

	pef.$form.css({
		'opacity': 0
		// 'transition': '1s'
	})

	pef.$submit_wrapper = pef.$form.find('.form-button-wrapper')

	pef.$name_input = $(pef.$form.find('input.text')[0])
	pef.$email_input = $(pef.$form.find('.email input')[0])
	pef.$state_input = $(pef.$form.find('input.text')[1])

	// generate each step
	pef.$form.find('.form-item').each(function(){

		if($(this).hasClass('checkbox')){

			generate_step($(this))	

		}

	})

	// and also generate submit step
	pef.$submit_wrapper.addClass('pef-hidden')

	add_nav(pef.$submit_wrapper)

	// console.log(pef)

	render_step(pef.$form.find('.form-item').first())

	setTimeout(function(){	

		pef.$form.css({
			'opacity': 1,
			'transition': '1s'
		})

	}, 1000)



	// bind nav
	pef.$form.on('click', '.pef-forward', function(){
		var target_step = $(this).parents().eq(1).next()

		// console.log(target_step)

		// if($(target_step).hasClass('checkbox')){
			if(target_step.length > 0 && $(target_step).hasClass('checkbox')){
				render_step(target_step)	
			}else{
				render_step(pef.$submit_wrapper)
			}					
		// }else{

		// }

	})
	pef.$form.on('click', '.pef-back', function(){
		var target_step = $(this).parents().eq(1).prev()
		
		// blorb - need to smoothly skip non-checkbox steps...

		// if($(target_step).hasClass('checkbox')){

		// && $(target_step).hasClass('field-list')
		// && $(target_step).hasClass('checkbox')
			if(target_step.length > 0 ){
				if(target_step.hasClass('field-list')){
					// render_step(pef.$form.find('.form-item').last())
					render_step(pef.$form.find('.pef-rendered-step').last())
				}else{
					render_step(target_step)		
				}
			//}else if($(this).parents().eq(1).prev().hasClass('.field-list')){
			}else{
				
				// render_step(pef.$form.find('.form-item').last())
				render_step(pef.$form.find('.pef-rendered-step').last())

				
			}
		// }else{

		// }

	})
	
	pef.$form.on('change', 'input', function(){

		var id = $(this).attr('id')

		if(id=='pef-final-input-name' || id=='pef-final-input-state' || id=='pef-final-input-email'){

		}else{

			var step = $(this).attr('data-item-step')
	
			var option = $(this).attr('data-item-option')
	
			var options = pef.step_formdata[step].options
	
			pef.step_formdata[step].options[option].checked = $(this).prop('checked')
	
			var step_total = 0
	
			var cur_total = 0
	
			for(o in options){
	
				if(options[o].checked){
					step_total += options[o].price
				}
	
			}
			pef.step_formdata[step].total = step_total
	
			for(f in pef.step_formdata){
	
				cur_total += pef.step_formdata[f].total
	
				// console.log('added: ', pef.formdata[f].total)
	
			}

		}

		// pef.formdata[step].total
		// $(this).parents().eq(2).find('.pef-field-price span').html(cur_total)

	})

	// pef.$submit_wrapper.find('input').remove()

	pef.$form.on('click', '#pef-final-email a', function(e){
		e.preventDefault()
		$(this).prepend('<textarea id="pef-copy"></textarea>')
		$('#pef-copy').text($('#pef-final-email a').text())
		$('#pef-copy').select()
		document.execCommand('copy')
		$('#pef-copy-success').html('Copied to clipboard!')
	})

	var f = pef.$form.find('.form-item').first()
	var fo = $(f).find('.option input')[0]
	$(fo).prop('checked', true).change()
	$(f).attr('data-visited', 'true')

}











function add_nav($ele){

	$ele.append(nav_buttons)

}













function render_step($step){

	// console.log($step)

	if($step.hasClass('form-button-wrapper')){

		// final page
		pef.$submit_wrapper.find('#pef-total-display').remove()
		pef.$submit_wrapper.find('#pef-total-inputs').remove()
		pef.$submit_wrapper.prepend('<div id="pef-total-inputs">' + pef.final.name_html + '<br>' + pef.final.email_html + '<br>' + pef.final.state_html + '<br></div>')
		pef.$submit_wrapper.prepend(display_totals())
		bind_custom_inputs()
		render_style_bg()
		
		pef.$form.find('.form-item').addClass('pef-hidden')
		pef.$submit_wrapper.removeClass('pef-hidden')
		pef.$submit_wrapper.find('.pef-forward').addClass('pef-hidden')

	}else if($step.prev().length>0){

		// normal page

		// this is in init for first page
		if($step.attr('data-visited')==='false'){
			$($step.find('.option input')[0]).prop('checked', true).change()
			$step.attr('data-visited', 'true')
		}

		pef.$form.find('.form-item').addClass('pef-hidden')
		pef.$submit_wrapper.addClass('pef-hidden')
		$step.removeClass('pef-hidden')
		
		// extra but works..
		pef.$submit_wrapper.find('.pef-forward').addClass('pef-hidden')
	
	}else if($step.prev().length==0){

		// were on first page
		pef.$form.find('.form-item').addClass('pef-hidden')
		pef.$submit_wrapper.addClass('pef-hidden')
		$step.removeClass('pef-hidden')

		pef.$form.find('.form-item').first().find('.pef-back').addClass('pef-hidden')

	}
		
	// var cur_total = 0

	// for(f in pef.step_formdata){

	// 	cur_total += pef.step_formdata[f].total

	// }

	$('body, html').animate({
        scrollTop: pef.$form.offset().top
    }, 200);

}
	

function render_style_bg(style){

	var bg = ''

	if($('#pef-totals-Styles .pef-totals-option')[0]){
	
		var x = $('#pef-totals-Styles .pef-totals-option')[0].innerHTML

		// switch($('#pef-totals-Styles .pef-totals-option')[0].innerHTML){
		if(x.match(/japanese/i)){
			// case 'Japanese':
			bg = pef.step_presets.style.img[1]
				// break;
		}else if(x.match(/native/i)){
			// case 'Natural':
			bg = pef.step_presets.style.img[2]
			// break;
				
		}else if(x.match(/formal/i)){
			// case 'Formal':
			bg = pef.step_presets.style.img[0]
			// break;
			// default:
			// break;

		}else if(x.match(/undecided/i)){

			bg = pef.step_presets.style.img[3]

		}
			
	}

	// }

	$('.pef-form-prompt').prepend('<div class="pef-prompt-bg"><img src="' + bg + '"></div>')
		// }

}







function bind_custom_inputs(){

	$('#pef-final-input-name').on('change', function(){
		pef.$name_input.val($(this).val())
		console.log(pef.$name_input.val())
	})
	$('#pef-final-input-email').on('change', function(){
		pef.$email_input.val($(this).val())
		// console.log('email change')
	})
	$('#pef-final-input-state').on('change', function(){
		pef.$state_input.val($(this).val())
		// console.log('state change')
	})


}








function generate_step($step){

	var title = $step.find('.title').text().replace(/\* /g, '').replace(/\*/g, '')

	title = title.replace(/ $/g, '')

	var desc = $step.find('.description').text()

	var attr_title = title.replace(/ |\"|\'/g, '_')

	var inner_html

	var preset_title = ''

	var instruct =  '<div class="pef-slider-instruct">adjust slider to change options</div>'

	var num_options = $step.find('.option input').length

	if(title.match(/property/i)){
		$step.attr('data-visited', 'false')
		preset_title = 'property'
		// var num_options = $step.find('.option input').length
		var mousedown = false
		$step.append($(instruct))
		// $(instruct).insertBefore($step.find('.pef-step-slider-wrap'))
		// $step.on('click', '.pef-visual', function(){
		// 	pef.step_presets.property.callback(this)
		// })

		$step.on('mousedown', '.pef-step-slider-wrap', function(e){
			// var where = find_click(this)
			pef.step_presets.property.callback(e, this, $step, num_options)
			// console.log(this)
			mousedown = true
		})
		// $step.on('touchstart', '.pef-step-slider-wrap', function(e){
		// 	// var where = find_click(this)
		// 	pef.step_presets.property.callback(e, this, $step, num_options)
		// 	// console.log(this)
		// 	mousedown = true
		// })
		// document.getElementById($step.attr('id')).addEventListener('touchstart', pef.step_presets.property.callback(e, this, $step, num_options), false);

		$step.on('mouseup', '.pef-step-slider-wrap', function(e){
			mousedown = false
		})
		// $step.on('touchend', '.pef-step-slider-wrap', function(e){
		// 	mousedown = false
		// })
		$step.on('mousemove', '.pef-step-slider-wrap', function(e){
			if(mousedown){
				pef.step_presets.property.callback(e, this, $step, num_options)
			}
		})
		// $step.on('touchstart', function(){
		// 	$('.pef-slider-instruct').html('jaaa howdy')
		// })
		// $step.on('touchstart', '.pef-step-slider-wrap', function(e){
		// 		$('.pef-slider-instruct').html(e[0])
		// })
		// $step.on('touchmove', '.pef-step-slider-wrap', function(e){
		// 	$('.pef-slider-instruct').html(e.touches[0])
		// 	pef.step_presets.property.callback(e, this, $step, num_options)
		// })
		// $step.on('touchmove', function(e){
		// 	$('.pef-slider-instruct').html('somethingggggg')
		// 	$('.pef-slider-instruct').html(e.touches[0].clientX) ///clientX
		// 	// pef.step_presets.property.callback(e, this, $step, num_options)
		// })
		$step.on('mouseleave', '.pef-step-slider-wrap', function(e){
			mousedown=false
		})
	}else if(title.match(/tree/i)){
		$step.attr('data-visited', 'false')

		preset_title='tree'
		// var num_options = $step.find('.option input').length
		var mousedown = false
		$step.append($(instruct))
		// $(instruct).insertBefore($step.find('.pef-step-slider-wrap'))

		// $step.on('click', '.pef-visual', function(){
		// 	pef.step_presets.tree.callback(this)
		// })
		$step.on('mousedown', '.pef-step-slider-wrap', function(e){
			// var where = find_click(this)
			pef.step_presets.tree.callback(e, this, $step, num_options)
			// console.log(this)
			mousedown = true
		})
		$step.on('mouseup', '.pef-step-slider-wrap', function(e){
			mousedown = false
		})
		$step.on('mousemove', '.pef-step-slider-wrap', function(e){
			if(mousedown){
				pef.step_presets.tree.callback(e, this, $step, num_options)
			}
		})
		$step.on('mouseleave', '.pef-step-slider-wrap', function(e){
			mousedown=false
		})
	}else if(title.match(/elevation/i)){
		$step.attr('data-visited', 'false')

		preset_title='elevation'
		// var num_options = $step.find('.option input').length
		var mousedown = false
		$step.append($(instruct))
		// $(instruct).insertBefore($step.find('.pef-step-slider-wrap'))

		// $step.on('click', '.pef-visual', function(){
		// 	pef.step_presets.elevation.callback(this)
		// })
		$step.on('mousedown', '.pef-step-slider-wrap', function(e){
			// var where = find_click(this)
			pef.step_presets.elevation.callback(e, this, $step, num_options)
			// console.log(this)
			mousedown = true
		})
		$step.on('mouseup', '.pef-step-slider-wrap', function(e){
			mousedown = false
		})
		$step.on('mousemove', '.pef-step-slider-wrap', function(e){
			if(mousedown){
				pef.step_presets.elevation.callback(e, this, $step, num_options)
			}
		})
		$step.on('mouseleave', '.pef-step-slider-wrap', function(e){
			mousedown=false
		})
	}else if(title.match(/element/i)){
		preset_title='elements'
		$step.on('click', '.pef-visual', function(){
			// also needs formdata 
			pef.step_presets.elements.callback(this)
		})
	}else if(title.match(/style/i)){
		preset_title='style'
		$step.on('click', '.pef-visual', function(){
			pef.step_presets.style.callback(this)
		})
	}

	process_inputs($step, title, attr_title, preset_title, desc, num_options)


	// where to add new html in step...
	// $step.prepend($(inner_html))

	add_nav($step)

	$step.addClass('pef-rendered-step')
}
















function process_inputs($form_item, title, attr_title, preset_title, desc, num_options){

	var counter = 0

	// var c = {}
	var dom_field = document.createElement('div')

	var is_slider = false

	var slider = ''

	var slider_class = ''

	// blorbly

	if(preset_title.match(/tree/i) || preset_title.match(/elevat/i) || preset_title.match(/propert/i)){
		is_slider = true
	}

	if(is_slider){
		slider = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"><div class="pef-slider-knob"></div></div></div>'
		slider_class = 'pef-slider-step'		
	}


	dom_field.innerHTML = '<div id="pef-step-'+ attr_title +'" class="' + slider_class + '"><div class="pef-step-title">' + title + '</div><div class="pef-step-desc">' + desc + '</div><div class="pef-step-visuals"></div>' + slider + '</div>' 

	var dom_visual_string = ''

	pef.step_formdata[attr_title] = {}	
	pef.step_formdata[attr_title].options = {}
	pef.step_formdata[attr_title].total = 0
	pef.step_formdata[attr_title].original = title
	pef.step_formdata[attr_title].desc = desc

	// $form_item.append('<div class="pef-step-price">Current estimate: <span>0</span></div>')

	$form_item.attr('data-step-total', 0)

	$form_item.find('.option input').each(function(){

		var visual_string = ''

		var opt_title = this.value

		var opt_price = 0

		var new_parts = opt_title.split('$$')

		var new_desc = new_parts[0]	

		new_desc = new_desc.replace('(', '<br>(')	

		if(new_parts[1]){
			opt_price = parseFloat(new_parts[1].replace(/[^\d.-]/g, ''))
		}

		// $form_item.find('.option label').text(new_desc)

		// var opt_attr_title = new_desc.replace(/ /g, '_').replace(/[^ ]|[^a-zA-Z]/g, '')
		var opt_attr_title = new_desc.replace(/ /g, '_').replace(/[^a-zA-Z0-9 _]/g, '')

		var id = attr_title + '_' + opt_attr_title

		// for targeting when clicked
		$(this).attr({
			'data-item-step': attr_title,
			'data-item-option': opt_attr_title,
			'id': id
		})

		pef.step_formdata[attr_title].options[opt_attr_title] = {}
		pef.step_formdata[attr_title].options[opt_attr_title].price = opt_price
		pef.step_formdata[attr_title].options[opt_attr_title].checked = false
		pef.step_formdata[attr_title].options[opt_attr_title].original = new_desc
		pef.step_formdata[attr_title].options[opt_attr_title].id = id

		visual_string = render_visual(pef.step_presets[preset_title].img[counter], id, new_desc, is_slider, counter)

		dom_visual_string = dom_visual_string + visual_string

		counter++

	})

	$(dom_field).find('.pef-step-visuals').prepend($(dom_visual_string))

	var first_notch = '<div class="pef-notch" style="left: 0px"></div>'
	var last_notch = '<div class="pef-notch" style="left: 99.5%; width: 0px"></div>'

	$(dom_field).find('.pef-step-slider').append($(first_notch))	

	for(i=1;i<(num_options-1);i++){

		var left = Math.floor(100 * (i / (num_options-1)))

		// console.log('calculating left: ', left)

		var notch = '<div class="pef-notch" style="left: ' + left + '%"></div>'

		$(dom_field).find('.pef-step-slider').append($(notch))	

	}

	$(dom_field).find('.pef-step-slider').append($(last_notch))	

	$form_item.prepend($(dom_field))

}





function render_visual(src, id, desc, is_slider, counter){

	var hidden_class = ''

	if(is_slider && counter!=0){
		hidden_class = 'pef-hidden-visual'
	}

	var visual = '<div class="pef-visual ' + hidden_class + '" data-vis_id="' + id + '"><img src="' + src + '"><div class="pef-visual-desc">' + desc + '</div></div>'

	return visual

}









function display_totals(){

	var prices_visible = false

	var totals = document.createElement('div')

	$(totals).attr('id', "pef-total-display")

	var total = pef.base_price
		
	for(field in pef.step_formdata){

		var priced = !field.match(/style/i) && field!=''

		var the_field = pef.step_formdata[field]

		var a_style = ''

		field_result = document.createElement('div')

		field_result.class='pef-totals-field'

		field_result.id='pef-totals-'+field

		field_result.innerHTML = '<div class="pef-totals-title">' + the_field.original + '</div>'

		for(option in the_field.options){

			var new_div = document.createElement('div')

			var price_span = ''

			if(the_field.options.hasOwnProperty(option) && the_field.options[option].checked){

				if(priced && prices_visible){

					price_span = ': <span class="pef-option-price">' + the_field.options[option].price + '</span>'
					new_div.innerHTML = '<div class="pef-totals-option">' + the_field.options[option].original + price_span + '</div>'	

				}else{

					new_div.innerHTML = '<div class="pef-totals-option">' + the_field.options[option].original + '</div>'		

				}

				$(field_result).append(new_div)

			}
			
		}

		if(priced && prices_visible){
			field_result.append('field total: ' + the_field.total)
		}

		$(totals).append(field_result)

		total += the_field.total

	}


	$(totals).prepend('<div class="pef-final-header">' + pef.final.header + '</div>')

	var p = '<div class="pef-form-prompt">' + pef.final.prompt + '<br>' + pef.final.contact_html + '</div>'

	// var p = '<div class="pef-form-prompt">' + pef.final.prompt + '<br>' + pef.final.submit_html + '</div>' + pef.final.name_html + '<br>' + pef.final.email_html + '<br>' + pef.final.state_html + '<br>'
	// var p = pef.final.name_html + '<br>' + pef.final.email_html + '<br>' + pef.final.state_html + '<br>'

	$(totals).append( '<div class="pef-form-total">Current estimate: <span class="pef-final-estimate">$ ' + total + '</span></div>' + p )
	// $(totals).append( '<div class="pef-form-total">Current estimate: <span class="pef-final-estimate">$ ' + total + '</span></div>' )

	return totals

}










function toggle_click(ele){
	if($(ele).hasClass('pef-highlighted')){
		click_deselect(ele)
	}else{
		click_select(ele)
	}
}


function click_select(ele){
	$(ele).addClass('pef-highlighted')
	var id = $(ele).attr('data-vis_id')
	$('#'+id).prop('checked', true).change()
	
}


function click_deselect(ele){
	$(ele).removeClass('pef-highlighted')
	var id = $(ele).attr('data-vis_id')
	$('#'+id).prop('checked', false).change()
}


function map_click_to_int(xpos, slider, num_options){
	var w = $(slider).width()
	var interval = w / num_options	
	var x = Math.min(xpos, w-1)
	var int = Math.floor(x / interval)
	return int
}

function map_click_to_notch(xpos, slider, num_options){
	var w = $(slider).width()
	var interval = w / num_options	
	var x = Math.min(xpos, w-1)
	var half = interval / 2
	// var notch = 1
	// if(xpos<half){
	// }else if(xpos<w-half){
	var raw_int = ( x + interval ) / interval
	var	notch = 1
	if(raw_int > (interval * num_options) && raw_int < ( w - half )){
		notch = num_options-1
	}else{
		notch = Math.floor( raw_int )
	}
	// 	console.log('notch: ', notch)
	// }else{
	// 	notch = num_options
	// }
	return notch

}


function toggle_slider_vis($step, visual){
	if($(visual).hasClass('pef-hidden-visual')){
		$step.find('.pef-visual').addClass('pef-hidden-visual')
		$(visual).removeClass('pef-hidden-visual')
	}else{

	}	
}


function update_slider(slider, x){

	$(slider).find('.pef-slider-knob').css('left', (x-3)+'px')

}


function knob_to_interval(slider, ex, sel, num_opt){

	sel++ // the strange case of the missing pef-notch(1)

	var left = $(slider).find('.pef-notch:nth-of-type('+ sel +')').css('left')

	$(slider).find('.pef-slider-knob').css('left', left )

}


</script>


