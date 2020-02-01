

var pef = {
	// the DOM element
	form:{},
	submit_wrapper:{},
	// my representation 
	step_formdata:{}, 
	step_presets:{
		property:{
			img:[
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(slider){
				console.log(slider)
			}
			// html:'some properteez'
		},
		elevation:{
			img:[
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(slider){
				console.log(slider)
			}
			// html:'some elevationz'
		},
		vegetation:{
			img:[
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(slider){
				console.log(slider)
			}
			// html:'some veggies'
		},
		elements:{
			img:[
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(ele){
				if($(ele).hasClass('pef-highlighted')){
					$(ele).removeClass('pef-highlighted')
					var id = $(this).attr('data-vis_id')
					$('#'+id).prop('checked', false).change()
				}else{
					$(ele).addClass('pef-highlighted')
					var id = $(this).attr('data-vis_id')
					$('#'+id).prop('checked', true).change()
				}
			}
			// html:'some eles'
		},
		style:{
			img:[
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg',
				'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(ele){
				if($(ele).hasClass('pef-highlighted')){
					$(ele).removeClass('pef-highlighted')
					var id = $(this).attr('data-vis_id')
					$('#'+id).prop('checked', false).change()
				}else{
					$(ele).addClass('pef-highlighted')
					var id = $(this).attr('data-vis_id')
					$('#'+id).prop('checked', true).change()
				}
			}
			// html:'stylezzzz'
		}
	},
	total: 0
}


var nav_buttons = '<div class="pef-nav"><div class="pef-back">BACK</div><div class="pef-forward">NEXT</div></div>'

var jq = document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(jq);
jq.onload=function(){
	init_pef()
}
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";


function init_pef(){

	$(document.head).append('<link rel="stylesheet" href="https://okonno.com/serv/pendleton/icon-style.css?v=4">');

	pef.form = $('form')

	pef.submit_wrapper = pef.form.find('.form-button-wrapper')

	// generate each step
	pef.form.find('.form-item').each(function(){

		generate_step($(this))

	})

	// and also generate submit step
	pef.submit_wrapper.addClass('pef-hidden')

	add_nav(pef.submit_wrapper)


	// bind nav
	pef.form.on('click', '.pef-forward', function(){
		var target_step = $(this).parents().eq(1).next()
		if(target_step.length > 0){
			render_step(target_step)	
		}else{
			render_step(pef.submit_wrapper)
		}		
	})
	pef.form.on('click', '.pef-back', function(){
		var target_step = $(this).parents().eq(1).prev()
		if(target_step.length > 0){
			if(target_step.hasClass('field-list')){
				render_step(pef.form.find('.form-item').last())
			}else{
				render_step(target_step)		
			}
		}else if($(this).parents().eq(1).prev().hasClass('.field-list')){
			render_step(pef.form.find('.form-item').last())
		}
	})
	pef.form.on('click', '.pef-visual', function(e){
		// var vis_id = $(this).attr('data-vis_id')
		// console.log('clicked: ', $(this))
		// send_click_to_checkbox(vis_id)
	})
	pef.form.on('click', '.pef-step-slider', function(){
		console.log('slidah')
	})

	render_step(pef.form.find('.form-item').first())

	console.log(pef)

}











function add_nav($ele){

	$ele.append(nav_buttons)

}













function render_step($step){

	// console.log($step)

	if($step.hasClass('form-button-wrapper')){

		// final page
		
		pef.form.find('.form-item').addClass('pef-hidden')
		pef.submit_wrapper.removeClass('pef-hidden')
		pef.submit_wrapper.find('.pef-forward').addClass('pef-hidden')

	}else if($step.prev().length>0){

		// normal page

		pef.form.find('.form-item').addClass('pef-hidden')
		pef.submit_wrapper.addClass('pef-hidden')
		$step.removeClass('pef-hidden')
		
		// extra but works..
		pef.submit_wrapper.find('.pef-forward').addClass('pef-hidden')
	
	}else if($step.prev().length==0){

		// were on first page
		pef.form.find('.form-item').addClass('pef-hidden')
		pef.submit_wrapper.addClass('pef-hidden')
		$step.removeClass('pef-hidden')

		pef.form.find('.form-item').first().find('.pef-back').addClass('pef-hidden')

	}
		
	var cur_total = 0

	for(f in pef.step_formdata){

		cur_total += pef.step_formdata[f].total

	}

}
	















function generate_step($step){

	var title = $step.find('.title').text().replace(/\* /g, '').replace(/\*/g, '')

	title = title.replace(/ $/g, '')

	var desc = $step.find('.description').text()

	var attr_title = title.replace(/ |\"|\'/g, '_')

	var inner_html

	if(title.match(/property/i)){
		parse_and_label_inputs($step, title, attr_title, desc)
		inner_html = generate_step_html($step, 'property', title, desc)
		$step.on('click', '.pef-slider', function(){
			pef.step_presets.elements.callback(this)
		})
	}else if(title.match(/vegetation/i)){
		parse_and_label_inputs($step, title, attr_title, desc)
		inner_html = generate_step_html($step, 'vegetation', title, desc)
		$step.on('click', '.pef-slider', function(){
			pef.step_presets.elements.callback(this)
		})
	}else if(title.match(/elevation/i)){
		parse_and_label_inputs($step, title, attr_title, desc)
		inner_html = generate_step_html($step, 'elevation', title, desc)
		$step.on('click', '.pef-slider', function(){
			pef.step_presets.elements.callback(this)
		})
	}else if(title.match(/element/i)){
		parse_and_label_inputs($step, title, attr_title, desc)
		inner_html = generate_step_html($step, 'elements', title, desc)
		$step.on('click', '.pef-visual', function(){
			pef.step_presets.elements.callback(this)
		})
	}else if(title.match(/style/i)){
		parse_and_label_inputs($step, title, attr_title, desc)
		inner_html = generate_step_html($step, 'style', title, desc)
		$step.on('click', '.pef-visual', function(){
			pef.step_presets.style.callback(this)
		})
	}

	// where to add new html in step...
	$step.prepend($(inner_html))

	add_nav($step)
}











function parse_and_label_inputs($form_item, title, attr_title, desc){

	// var c = {}

	pef.step_formdata[attr_title] = {}	
	pef.step_formdata[attr_title].options = {}
	pef.step_formdata[attr_title].total = 0
	pef.step_formdata[attr_title].original = title
	pef.step_formdata[attr_title].desc = desc

	// $form_item.append('<div class="pef-step-price">Current estimate: <span>0</span></div>')

	$form_item.attr('data-step-total', 0)

	$form_item.find('.option input').each(function(){

		// var opt = {}

		var opt_title = this.value

		// when ready
		// var price = opt_title.substr(opt_title.match(/\$/).index).replace(/ /g, '').replace(/\$/g, '');
		var price = 1000

		var opt_attr_title = this.value.replace(/ /g, '_')

		var id = opt_title + '_' + opt_attr_title

		// for targeting when clicked
		$(this).attr({
			'data-item-step': attr_title,
			'data-item-option': opt_attr_title,
			'id': id
		})

		pef.step_formdata[attr_title].options[opt_attr_title] = {}
		pef.step_formdata[attr_title].options[opt_attr_title].price = price
		pef.step_formdata[attr_title].options[opt_attr_title].checked = false
		pef.step_formdata[attr_title].options[opt_attr_title].original = opt_title
		pef.step_formdata[attr_title].options[opt_attr_title].id = id


	})

}








function generate_step_html($step, step, title, desc){
	// step title desc come from pre-existing 
	// other vars need generated

	var imgs = pef.step_presets[step].img

	var inputs = $step.find('input')

	var img_html = ''

	var step_widget = ''

	// console.log(imgs.length)

	// for(i=0; i<imgs.length; i++){
	// 	img_html = img_html + render_click_visuals(imgs[i], step)
	// }

	switch(step){
		case 'property':
			step_widget = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"></div></div>'
			render_slider()
			break;
		case 'elevation':
			step_widget = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"></div></div>'
			render_slider()
			break;
		case 'vegetation':
			step_widget = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"></div></div>'
			render_slider()
			break;
		case 'elements':
			for(i=0; i<inputs.length; i++){
				// arrrgg need to get id here.  might have to store in formdata .. ?
				var src = imgs[i]
				img_html = img_html + render_click_visuals(src, step, id)
			}
			// step_widget = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"></div></div>'
			break;
		case 'style':
			for(i=0; i<inputs.length; i++){
				var src = imgs[i]
				img_html = img_html + render_click_visuals(src, step, id)
			}
			// step_widget = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"></div></div>'
			break;
		default:
			break;
	}

	var html_pre = '<div id="pef-step-'+ step +'"><div class="pef-step-title">' + title + '</div><div class="pef-step-desc">' + desc + '</div><div class="pef-step-visuals">' + img_html
	var html_post = '</div>'+step_widget+'</div>'

	var html = html_pre + html_post

	return html

}



function render_click_visuals(src, step, id){

	// step may be unecessary

	return '<div class="pef-visual" data-vis_id="' + id + '"><img src="' + src + '"></div>'

}





function render_slider(){


}




