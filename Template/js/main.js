$(document).ready(function() {
	//	var mls = $('body').attr('id').value;
	var mls = 'r2177295';
	var opendayUri = 'http://www.yujiahao.cn/sp/get/openhouse/';
	var housepic = 'http://www.yujiahao.cn/sp/get/imgs/';
	var contact = 'http://www.yujiahao.cn/sp/call/agent/';

	$.get(opendayUri, {
			"mls": mls
		},
		function(data, status) {
			var open = eval(data);
			for(var i = 1; i <= open.length; i++) {
				$('.add-on-' + i).text(open[i - 1].opendate);
				$('.add-time-' + i).text(open[i - 1].opentime);
			}
		});
	//房源图片
	$.get(housepic, {
			"mls": mls
		},
		function(data, status) {
			var open = eval(data);
			for(var i = 1; i <= open.length; i++) {
				$('.list-group-pic').find('#house-pic-' + i).attr('src', open[i - 1].img);
				$('.list-group-pic').find('#house-pic-' + i).attr('data-info', open[i - 1].desc);
			}
		});

	//联系经纪人
	$.post(contact,{
		
	});
	
	
	//参数说明  地图中心点(与地址一致或自己设定)/价格/房源地址/地图放大倍数默认10
	$("#location").mapmarker('4807 PATRICK PLACE', '$289,000', '4807 PATRICK PLACE',12);
	
	//$.ajax({
	//	type: 'POST',
	//	url: contact,
	//	dataType: 'json/application',
	//	data: {
	//		'mls': mls,
	//		'agentid': agentid,
	//		'name': name,
	//		'tel': tel,
	//		'email': email,
	//		'desc': desc
	//	},
	//	success: function(res) {
	//
	//	},
	//	error: function(err) {
	//		console.error('get info failed')
	//	}
	//})

	// show Pic information
	var presentPic;

	/*function showPicInfo(target) {
		presentPic = $(target).attr('id');
		var imgsrc = $(target).attr('src');
		var imgdesc = $(target).attr('data-info');
		$('#modal-img').attr('src', imgsrc);
		$('#modal-desc').text(imgdesc);
	}*/

	function toLeftPic() {
		var presrc = $('#' + presentPic).parent('.target').prev().find('img').attr('src');
		var predesc = $('#' + presentPic).parent('.target').prev().find('img').attr('data-info');
		$('#modal-img').attr('src', presrc);
		$('#modal-desc').text(predesc);
		presentPic = $('#' + presentPic).parent('.target').prev().find('img').attr('id');

	}

	function toRightPic() {
		var presrc = $('#' + presentPic).parent('.target').next().find('img').attr('src');
		var predesc = $('#' + presentPic).parent('.target').next().find('img').attr('data-info');
		$('#modal-img').attr('src', presrc);
		$('#modal-desc').text(predesc);
		presentPic = $('#' + presentPic).parent('.target').next().find('img').attr('id');

	}
	//pagination function
	//			var initnum = 1;

	function changePage(pagenum) {
		var timer = 0;
		console.log(timer);
		var initLeft = $('.showing').offset().left;
		if(pagenum != initnum) {
			var interval = setInterval(function() {
				if(pagenum > initnum || pagenum == 'r')
					$('.showing').css('left', $('.showing').offset().left + 100 + 'px');

				if(pagenum < initnum || pagenum == 'l')
					$('.showing').css('left', $('.showing').position().left - 100 + 'px');

				$('.showing').css('opacity', $('.showing').css('opacity') / 1.5);
				timer++;
				if(timer > 6) {
					$('.showing').css('left', 0);
					$('.showing').css('opacity', 1);
					if(pagenum != 'r' && pagenum != 'l')
						initnum = pagenum;
					clearInterval(interval);
				}
			}, 30);

		}

		switch(pagenum) {
			case 1:
				setTimeout(function() {
					$('.showing').removeClass('showing');
					$('.type-1').addClass('showing');
					$('.showing-page').removeClass('showing-page');
					$('.type-pagination').find('#1').addClass('showing-page');
				}, 250);
				break;
			case 2:
				setTimeout(function() {
					$('.showing').removeClass('showing');
					$('.type-2').addClass('showing');
					$('.showing-page').removeClass('showing-page');
					$('.type-pagination').find('#2').addClass('showing-page');
				}, 250);
				break;
			case 3:
				setTimeout(function() {
					$('.showing').removeClass('showing');
					$('.type-3').addClass('showing');
					$('.showing-page').removeClass('showing-page');
					$('.type-pagination').find('#3').addClass('showing-page');
				}, 250);
				break;
			case 'l':
				if(initnum != 1) {
					setTimeout(function() {
						$('.showing').removeClass('showing');
						initnum--;
						var type = initnum;
						$('.type-' + type).addClass('showing');
						$('.showing-page').removeClass('showing-page');
						$('.type-pagination').find('#' + type).addClass('showing-page');
					}, 250);
				}
				break;
			case 'r':
				if(initnum != 3) {
					setTimeout(function() {
						$('.showing').removeClass('showing');
						initnum++;
						var type = initnum;
						$('.type-' + type).addClass('showing');
						$('.showing-page').removeClass('showing-page');
						$('.type-pagination').find('#' + type).addClass('showing-page');
					}, 250);
				}

				break;
			default:
		}
	}

});

//		}