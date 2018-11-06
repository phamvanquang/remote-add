$(document).ready(function(){
	$('.tab-more').click(function(){
		$('.actionBar-top-sort').hide();
		$('.actionBar-top-more').slideToggle(200);
	});
	$('.tab-sort').click(function(){
		$('.actionBar-top-more').hide();
		$('.actionBar-top-sort').slideToggle(200);
	});

	$('.list-item').click(function(event){
		var Task_list = $('.Task-list');
		var Task_item_select = $('.Task-item-select');
		if(event.target.className == "Task-list item-list"){
			for(var i = 0; i < Task_list.length; i++){
				$(Task_list[i]).css("background-color","#fff");
			}
			for(var i = 0; i < Task_item_select.length; i++){
				$(Task_item_select[i]).css("background-color","#fff");
			}
			$(event.target).css("background-color","#e1f2fe");
		}
	})
	$('.Task-item').click(function(event){
		var Task_item_select = $('.Task-item-select');
		var Task_list = $('.Task-list');
		if(event.target.className == "Task-item-select item-list"){
			for(var i = 0; i < Task_item_select.length; i++){
				$(Task_item_select[i]).css("background-color","#fff");
			}
			for(var i = 0; i < Task_list.length; i++){
				$(Task_list[i]).css("background-color","#fff");
			}
			$(event.target).css("background-color","#e1f2fe");
		}
	})
	$('.list-item').dblclick(function(event){
		if(event.target.className == "Task-list item-list"){
			$('#detail').show(100);
			var text_list = $(event.target).find('span').text();
			$('.text-view input').val(text_list);
			/*$('#detail').animate({
				right: '367px'
			})*/
			$('.list-item').click(function(e){
				if(e.target.className == "Task-list item-list"){
					var text_list = $(e.target).find('span').text();
					$('.text-view input').val(text_list);
				}
			})
		}
	});
	$('.Task-item').dblclick(function(event){
		if(event.target.className == "Task-item-select item-list"){
			$('#detail').show(100);
			var text_list = $(event.target).find('.Task-item-title').text();
			$('.text-view input').val(text_list);
			/*$('#detail').animate({
				right: '367px'
			})*/
			$('.list-item').click(function(e){
				if(e.target.className == "Task-list item-list"){
					var text_list = $(e.target).find('.Task-item-title').text();
					$('.text-view input').val(text_list);
				}
			})
		}
	});
	$('.forward').click(function(){
		$('#detail').hide(100);
	});
	$('.user-avatar').click(function(){
		$('.content').toggle();
	})
	$('.comment').click(function(){
		$('.popover').toggle();
	})
	$('#input-add').keypress(function(event){
		if(event.which == 13){
			var text_add = $('#input-add').val();
			text_add = text_add.trim();
			if(text_add != ""){
				$('.list-item').append(`<ul class="Task-list item-list">
										<li class="Task-list-select">
											<a href="#" class="select-item-icon">
												<i class="far fa-square icon"></i>
											</a>
											<span>`+text_add+`</span>
											<i class="far fa-star"></i>
										</li>
									</ul>`);
				$('#input-add').val("");	
			}
		}
	})
	$('.list-item').click(function(event){
		if(event.target.className == "far fa-square icon"){
			$(event.target).parents('ul').slideUp(500);
			var parents_span = $(event.target).parents('ul');
			var text_span = $(parents_span).find('span').text();
			$('.Task-item').append(`<ul class="Task-item-select item-list">
										<li>
											<i class="far fa-check-square icon-item"></i>
											<span class="Task-item-title">`+text_span+`</span>
											<span class="Task-item-time">Time post</span>
											<i class="far fa-star"></i>
										</li>
									</ul>`);
		}
	})
	$('.Task-item').click(function(){
		if(event.target.className == "far fa-check-square icon-item"){
			$(event.target).parents('ul').slideUp(500);
			var parents_span_item = $(event.target).parents('ul');
			var text_span_item = $(parents_span_item).find('.Task-item-title').text();
			$('.list-item').append(`<ul class="Task-list item-list">
										<li class="Task-list-select">
											<a href="#" class="select-item-icon">
												<i class="far fa-square icon"></i>
											</a>
											<span>`+text_span_item	+`</span>
											<i class="far fa-star"></i>
										</li>
									</ul>`);
		}
	})
	$('.list-item').contextmenu(function(event){
		$('.context-menu').show();
		var x = event.clientX + "px";
		var y = event.clientY + "px";
		$('.context-menu').css({marginTop: y, marginLeft: x});
		event.preventDefault();
		a = $(event.target);
		var text_context = $(event.target).find('span').text();
				$('.custom-text').find('h3').text(text_context + ' will be deleted forever.');
		$('.del').click(function(){
		$('#confirmation-main').css("display","block");
				$('.context-menu').css("display","none");
				$('.cancel').click(function(){
					$('#confirmation-main').css("display","none");
				})
				$('.blue').click(function(){
						a.css("display","none");
						$('#confirmation-main').css("display","none");
				})
		})
	})
	$('#create-list').click(function(){
		$('.create-new-list').css("display","block");
		$('.cancel-full').click(function(){
			$('.create-new-list').css("display","none");
		});
		$('.save').click(function(){
			var text_create = $('.list-name').val();
			text_create = text_create.trim();
			if(text_create != ""){
				$('#list-scroll').append(`<a href="#" class="list-family">
										<ul class="list-select">
											<li class="family-item">
												<i class="fas fa-list-ul"></i>
												<span class="text media">`+text_create+`</span>
												<span class="number media">1</span>
											</li>
										</ul>
									</a>`);
			}
			$('.list-name').val("");
			$('.create-new-list').css("display","none");
		})
	})
	$(window).click(function(event){
		if(!$(event.target).closest('.list-item').length && !$(event.target).closest('#list-scroll').length && !$(event.target).closest('#user-toolbar').length && !$(event.target).closest('#create-list').length && !$(event.target).closest('.list-toolbar').length && !$(event.target).closest('.title-head').length && !$(event.target).closest('.Task-item').length && !$(event.target).closest('#detail').length && !$(event.target).closest('.content-firm').length && !$(event.target).closest('.new-list').length && !$(event.target).closest('.context-menu').length){
			$('#detail').hide(100);
		}
		if(!$(event.target).closest('.user-avatar').length && !$(event.target).closest('.content').length){
			$('.content').hide();
		}
		if(!$(event.target).closest('.popover').length && !$(event.target).closest('.comment').length){
			$('.popover').hide();
		}
		if(!$(event.target).closest('.context-menu').length){
			$('.context-menu').hide();
		}
	})
	$('.input-fake input').keypress(function(event){
		if(event.which == 13){
			var text_comment = $('.input-fake input').val();
			text_comment = text_comment.trim();
			if(text_comment != ""){
				$('.comment-list').append(`<li class="comment-item">
											<div class="section-icon picture">
												<img src="p.png">
											</div>
											<div class="section-content">
												<span class="comment-author">Pham Quang</span>
												<span class="comment-time">Comment-time</span>
												<a href="#" class="section-delete">
													<i class="fas fa-backspace"></i>
												</a>
												<div class="comment-text">`+text_comment+`</div>
											</div>	
									   </li>`)
			}
			$('.input-fake input').val("");
		}
	})
	$('.title-head').click(function(){
		$('.Task-item').toggle();
	})
	$('.comment-list').click(function(event){
		comment_del = $(event.target);
		var text_context = $(event.target).parents('.section-content').find('.comment-text').text();
				$('.custom-text').find('h3').text(text_context + ' will be deleted forever.');
		if(event.target.className == "fas fa-backspace"){
			$('#confirmation').css("display","block");
			$('.cancel').click(function(){
				$('#confirmation').css("display","none");
			})
			$('.blue').click(function(){
				comment_del.parents('li').css("display","none");
				console.log(comment_del.parents('li'))
				$('#confirmation').css("display","none");
			})
		}
	})
	$('.search-icon').click(function(){
		$('.search').focus();
	})
	$('.icon-addTask').click(function(){
		$('#input-add').focus();
	})
	$('.account').click(function(){
		$('.content').hide();
		$('#confirmation-account').show();
	})
	$('.cols-20 button').click(function(){
		$('#confirmation-account').hide();
	})
	$('.toggle-icon').click(function(){
		if($(window).width() > 1000){
			$('#lists').toggleClass('lists-none');
			$('#main').toggleClass('main-none');
		}
		else{
			$('#lists').toggleClass('lists-media');
			$('#main').toggleClass('main-media');
		}
	})
	$(window).resize(function(){
		var width = $(window).width();
		if(width < 1000){
			/*$('#lists').removeClass('lists-none');
			$('#main').removeClass('main-none');*/
			$('#lists').removeClass('lists-none');
			$('#main').removeClass('main-none');
		}
		if(width > 1000){
			$('#lists').removeClass('lists-media');
			$('#main').removeClass('main-media');
		}
	})
})