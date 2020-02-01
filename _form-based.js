<script>


var pef = {
	// the DOM element
	$form:{},
	$submit_wrapper:{},
	// my representation 
	step_formdata:{}, 
	step_presets:{
		property:{
			img:[
				'https://okonno.com/serv/pendleton/images/quarter-half.png',
				'https://okonno.com/serv/pendleton/images/half-three-quarter.png',
				'https://okonno.com/serv/pendleton/images/three-quarter-one.png',
				'https://okonno.com/serv/pendleton/images/one-two.png',
				'https://okonno.com/serv/pendleton/images/two-three.png',
				'https://okonno.com/serv/pendleton/images/three-plus.png'
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg',
				// 'https://i.imgur.com/AIOqkqR.jpg'
			],
			callback: function(ele){
				for(i=0; i<$(ele).siblings().length; i++){
					click_deselect($(ele).siblings()[i])
				}
				click_select(ele)
				// console.log(ele)
			}
			// html:'some properteez'
		},
		elevation:{
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
				for(i=0; i<$(ele).siblings().length; i++){
					click_deselect($(ele).siblings()[i])
				}
				click_select(ele)
			}
			// html:'some elevationz'
		},
		tree:{
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
				for(i=0; i<$(ele).siblings().length; i++){
					click_deselect($(ele).siblings()[i])
				}
				click_select(ele)
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

var jq = document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(jq);
jq.onload=function(){
	init_pef()
}
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";


function init_pef(){

	$(document.head).append('<link rel="stylesheet" href="https://okonno.com/serv/pendleton/icon-style.css?v=4">');

	pef.$form = $('form')

	pef.$form.css({
		'opacity': 0
		// 'transition': '1s'
	})

	pef.$submit_wrapper = pef.$form.find('.form-button-wrapper')


	// generate each step
	pef.$form.find('.form-item').each(function(){

		generate_step($(this))

	})

	// and also generate submit step
	pef.$submit_wrapper.addClass('pef-hidden')

	add_nav(pef.$submit_wrapper)

	render_step(pef.$form.find('.form-item').first())

	console.log(pef)




	setTimeout(function(){	

		pef.$form.css({
			'opacity': 1,
			'transition': '1s'
		})

	}, 1000)



	// bind nav
	pef.$form.on('click', '.pef-forward', function(){
		var target_step = $(this).parents().eq(1).next()
		if(target_step.length > 0){
			render_step(target_step)	
		}else{
			render_step(pef.$submit_wrapper)
		}		
	})
	pef.$form.on('click', '.pef-back', function(){
		var target_step = $(this).parents().eq(1).prev()
		if(target_step.length > 0){
			if(target_step.hasClass('field-list')){
				render_step(pef.$form.find('.form-item').last())
			}else{
				render_step(target_step)		
			}
		}else if($(this).parents().eq(1).prev().hasClass('.field-list')){
			render_step(pef.$form.find('.form-item').last())
		}
	})
	
	pef.$form.on('change', 'input', function(){

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

		// pef.formdata[step].total
		// $(this).parents().eq(2).find('.pef-field-price span').html(cur_total)

	})

}











function add_nav($ele){

	$ele.append(nav_buttons)

}













function render_step($step){

	// console.log($step)

	if($step.hasClass('form-button-wrapper')){

		// final page
		pef.$submit_wrapper.find('#pef-total-display').remove()
		pef.$submit_wrapper.prepend(display_totals())
		
		pef.$form.find('.form-item').addClass('pef-hidden')
		pef.$submit_wrapper.removeClass('pef-hidden')
		pef.$submit_wrapper.find('.pef-forward').addClass('pef-hidden')

	}else if($step.prev().length>0){

		// normal page

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

	var preset_title = ''

	if(title.match(/property/i)){
		preset_title = 'property'
		$step.on('click', '.pef-visual', function(){
			pef.step_presets.property.callback(this)
		})
		$step.on('click', '.pef-step-slider-wrap', function(e){
			// var where = find_click(this)
			console.log(this)
		})
	}else if(title.match(/tree/i)){
		preset_title='tree'
		$step.on('click', '.pef-visual', function(){
			pef.step_presets.tree.callback(this)
		})
		$step.on('click', '.pef-step-slider-wrap', function(e){
			// var where = find_click(this)
			console.log(this)
		})
	}else if(title.match(/elevation/i)){
		preset_title='elevation'
		$step.on('click', '.pef-visual', function(){
			pef.step_presets.elevation.callback(this)
		})
		$step.on('click', '.pef-step-slider-wrap', function(e){
			// var where = find_click(this)
			console.log(this)
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

	process_inputs($step, title, attr_title, preset_title, desc)


	// where to add new html in step...
	// $step.prepend($(inner_html))

	add_nav($step)
}
















function process_inputs($form_item, title, attr_title, preset_title, desc){

	var img_counter = 0

	// var c = {}
	var dom_field = document.createElement('div')

	var slider = ''

	if(preset_title.match(/veget/i) || preset_title.match(/elevat/i) || preset_title.match(/propert/i)){
		slider = '<div class="pef-step-slider-wrap"><div class="pef-step-slider"><div class="pef-slider-knob"></div></div></div>'
	}

	dom_field.innerHTML = '<div id="pef-step-'+ attr_title +'"><div class="pef-step-title">' + title + '</div><div class="pef-step-desc">' + desc + '</div><div class="pef-step-visuals"></div>' + slider + '</div>' 

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

		visual_string = render_visual(pef.step_presets[preset_title].img[img_counter], id, new_desc)

		dom_visual_string = dom_visual_string + visual_string

		img_counter++

	})

	$(dom_field).find('.pef-step-visuals').prepend($(dom_visual_string))

	$form_item.prepend($(dom_field))

}





function render_visual(src, id, desc){

	return '<div class="pef-visual" data-vis_id="' + id + '"><img src="' + src + '"><div class="pef-visual-desc">' + desc + '</div></div>'

}









function display_totals(){

	var prices_visible = false

	var totals = document.createElement('div')

	$(totals).attr('id', "pef-total-display")

	var total = 0
		
	for(field in pef.step_formdata){

		var priced = !field.match(/style/i) && field!=''

		var the_field = pef.step_formdata[field]

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


	$(totals).append('<div class="pef-form-total">Current estimate: $ '+ total + '</div>')

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





</script>


