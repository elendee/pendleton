<script>





var pef = {
	// the DOM element
	form:{},
	submit_wrapper:{},
	// my representation 
	fields:{

	},
	total: 0
}


var nav_buttons = '<div class="pef-nav"><div class="pef-back"><</div><div class="pef-forward">></div></div>'


// console inits

var jq = document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(jq);
jq.onload=function(){
	//init_pef()
}
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";


// wait for jquery / doc ready

// setTimeout(function(){
function init_pef(){

	$(document.head).append('<link rel="stylesheet" href="https://okonno.com/serv/pendleton/style.css?v=4">');

	pef.form = $('form')

	pef.submit_wrapper = pef.form.find('.form-button-wrapper')

	pef.form.find('.form-item').each(function(){

		// var options = return_options($(this))

		if($(this).hasClass('checkbox')){

			add_to_pef($(this))

		}

		add_nav($(this))

	})

	pef.submit_wrapper.addClass('pef-hidden')

	render_page('direct', pef.form.find('.form-item').first())

	add_nav(pef.submit_wrapper)

	pef.form.on('click', '.pef-forward', function(){
		render_page('f', $(this).parents().eq(1))
		// console.log($(this).parents().eq(1))
	})
	pef.form.on('click', '.pef-back', function(){
		render_page('b', $(this).parents().eq(1))
	})

	pef.form.on('change', 'input', function(){

		var field = $(this).attr('data-item-field')
		var option = $(this).attr('data-item-option')

		var options = pef.fields[field].options

		pef.fields[field].options[option].checked = $(this).prop('checked')

		var field_total = 0

		var cur_total = 0

		for(o in options){

			if(options[o].checked){
				field_total += options[o].price
			}

		}
		pef.fields[field].total = field_total


		for(f in pef.fields){

			cur_total += pef.fields[f].total

			// console.log('added: ', pef.fields[f].total)

		}

		// pef.fields[field].total
		$(this).parents().eq(2).find('.pef-field-price span').html(cur_total)

	})

	console.log('init pef: ', pef)

}
//, 2500)







function add_to_pef($form_item){

	// var c = {}

	var title = $form_item.find('.title').text().replace(/\* /g, '').replace(/\*/g, '')

	title = title.replace(/ $/g, '')

	var attr_title = title.replace(/ /g, '_')

	pef.fields[attr_title] = {}	
	pef.fields[attr_title].options = {}
	pef.fields[attr_title].total = 0
	pef.fields[attr_title].original = title

	$form_item.append('<div class="pef-field-price">Current estimate: <span>0</span></div>')

	$form_item.attr('data-field-total', 0)

	$form_item.find('.option input').each(function(){

		// var opt = {}

		var opt_title = this.value

		// when ready
		// var price = opt_title.substr(opt_title.match(/\$/).index).replace(/ /g, '').replace(/\$/g, '');
		var price = 1000

		var opt_attr_title = this.value.replace(/ /g, '_')

		// for targeting when clicked
		$(this).attr({
			'data-item-field': attr_title,
			'data-item-option': opt_attr_title
		})

		pef.fields[attr_title].options[opt_attr_title] = {}
		pef.fields[attr_title].options[opt_attr_title].price = price
		pef.fields[attr_title].options[opt_attr_title].checked = false
		pef.fields[attr_title].options[opt_attr_title].original = opt_title


	})

}





function add_nav($ele){

	$ele.append(nav_buttons)

}




function render_page(d, $page){

	var $nav_to_page = 'none'

	if($page.hasClass('form-button-wrapper')){
		switch(d){
			case 'f':
				// never happens
				console.log('invalid f nav')
				break;
			case 'b':
				pef.form.find('.form-item').addClass('pef-hidden')
				pef.submit_wrapper.addClass('pef-hidden')
				pef.form.find('.form-item').last().removeClass('pef-hidden')
				break;
			default:
				console.log('invalid nav')
				break;
		}

	}else{

		$('#pef-total-display').remove()

		switch(d){
			case 'f':
				if($page.next().length>0){
					pef.form.find('.form-item').addClass('pef-hidden')
					pef.submit_wrapper.addClass('pef-hidden')
					$page.next().removeClass('pef-hidden')	
					$nav_to_page = $page.next()
				}else{
					pef.form.find('.form-item').addClass('pef-hidden')
					pef.submit_wrapper.prepend(display_totals())
					pef.submit_wrapper.removeClass('pef-hidden')
					pef.submit_wrapper.find('.pef-forward').addClass('pef-hidden')
				}
				// pef.form.first().find('.pef-back').removeClass('pef-hidden')
				break;
			case 'b':
				if($page.prev().length>0){
					pef.form.find('.form-item').addClass('pef-hidden')
					pef.submit_wrapper.addClass('pef-hidden')
					$page.prev().removeClass('pef-hidden')
					$nav_to_page = $page.prev()
					if($page.prev().prev().length<1){
						pef.form.find('.form-item').first().find('.pef-back').addClass('pef-hidden')		
					}
					// extra but works..
					pef.submit_wrapper.find('.pef-forward').addClass('pef-hidden')
				}else{
					pef.form.first().find('.pef-back').addClass('pef-hidden')
				}
				// pef.submit_wrapper.find('.pef-forward').removeClass('pef-hidden')
				break;
			case 'direct':
				pef.form.find('.form-item').addClass('pef-hidden')
				pef.submit_wrapper.addClass('pef-hidden')
				$page.removeClass('pef-hidden')
				$nav_to_page = $page
				if($page.prev().length<1){
					pef.form.find('.form-item').first().find('.pef-back').addClass('pef-hidden')		
				}
				break;
			default:
				break;
		}

		// current total
		var cur_total = 0

		for(f in pef.fields){

			cur_total += pef.fields[f].total

			// console.log('field totals at page render: ' + pef.fields[f].total)

		}

		if($nav_to_page!='none'){
			$nav_to_page.parents().eq(2).find('.pef-field-price span').html(cur_total)	
		}
		

	}
	
}





function display_totals(){

	var totals = document.createElement('div')

	$(totals).attr('id', "pef-total-display")

	var total = 0
		
	for(field in pef.fields){

		var the_field = pef.fields[field]

		// var field_total = 0

		field_result = document.createElement('div')

		field_result.class='pef-totals-field'

		field_result.id='pef-totals-'+field

		field_result.innerHTML = '<div class="pef-totals-title">' + the_field.original + '</div>'

		for(option in the_field.options){

			var new_div = document.createElement('div')

			if(the_field.options.hasOwnProperty(option) && the_field.options[option].checked){

				new_div.innerHTML = '<div class="pef-totals-option">' + the_field.options[option].original + ': <span class="pef-option-price">' + the_field.options[option].price + '</span></div>'	

				$(field_result).append(new_div)

				// field_total += the_field.options[option].price

			}
			
		}

		// $(field_result).append('field total: ' + field_total)
		field_result.append('field total: ' + the_field.total)

		$(totals).append(field_result)

		// total += field_total
		total += the_field.total

	}

	$(totals).append('<div class="pef-form-total">Current estimate: $ '+ total + '</div>')

	return totals

}
</script>