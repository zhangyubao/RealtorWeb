$(document).ready(function() {
  //	var mls = $('body').attr('id').value;
  t_dn = $(".img-item")
  var mls = 'r2177295';
  var opendayUri = 'http://www.yujiahao.cn/sp/get/openhouse/';
  var housepic = 'http://www.yujiahao.cn/sp/get/imgs/';
  var phoneWidth = document.documentElement.clientWidth;
  var phoneHeight = document.documentElement.clientHeight;
  if (phoneWidth < 768) {
    $('#descrption').css('height', phoneHeight);
    $('#solutions').css('height', phoneHeight);
    $('#openday').css('height', phoneHeight);
    $('#pricing').css('height', phoneHeight);
    $('#videos').css('height', phoneHeight);
    $('.real-view').css('height', phoneHeight);
    $('.map').css('height', phoneHeight);
    $('#xscontact').css('height', phoneHeight);
    $('.introduce').css('height', phoneHeight);
  }
  $.get(opendayUri, {
      "mls": mls
    },
    function(data, status) {
      var open = eval(data);
      for (var i = 1; i <= open.length; i++) {
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
      var container = $('#itemContainer');
      var xscontainer = $('#xsitemContainer');
      for (var i = 1; i <= open.length; i++) {
        var node_dn = t_dn.clone();
        node_dn.find('img').attr('src', open[i - 1].img);
        container.append(node_dn);
      }
      for (var i = 1; i <= open.length; i++) {
        var node_dn = t_dn.clone();
        node_dn.find('img').attr('src', open[i - 1].img);
        xscontainer.append(node_dn);
      }
      $("div.holder").jPages({
        containerID: "itemContainer",
        previous: "〈",
        next: "〉",
        perPage: 9
      });
      $("div.xs-holder").jPages({
        containerID: "xsitemContainer",
        previous: "",
        next: "",
        perPage: 2
      });
    });
  $("div.openday-page").jPages({
    containerID: "xsopenday",
    previous: "",
    next: "",
    perPage: 1
  });

  $('#submit').onclick = function() {
    var mls = $('body').attr('id').value;
    var name = $('#contact-name').value;
    var tel = $('#contact-tel').value;
    var email = $('#contact-email').value;
    var desc = $('#contact-input').value;
    if (name.empty()) {
      new Toast({
        context: $('body'),
        message: '请输入姓名'
      }).show();
      return;
    }
    //

    //联系经纪人
    $.post(contact, {
      'mls': 'r2177295',
      'agentid': agentid,
      'name': name,
      'tel': tel,
      'email': email,
      'desc': desc
    }, function(data, status) {
      alert(data);
    });
  }

  //参数说明  地图中心点(与地址一致或自己设定)/价格/房源地址/地图放大倍数默认10
  $("#location").mapmarker('4807 PATRICK PLACE', '$289,000', '4807 PATRICK PLACE', 14);

});

function commitdata() {
  var contact = 'http://www.yujiahao.cn/sp/call/agent/';
  var mls = $('body').attr('id').value;
  var name = document.getElementById('contact-name').value;
  var tel = document.getElementById('contact-tel').value;
  var email = document.getElementById('contact-email').value;
  var desc = document.getElementById('contact-input').value;
  //	if(name.empty()) {
  //		new Toast({
  //			context: $('body'),
  //			message: '请输入姓名'
  //		}).show();
  //		return;
  //	}

  //联系经纪人
  $.post(contact, {
    'mls': 'r2177295',
    'agentid': agentid,
    'name': name,
    'tel': tel,
    'email': email,
    'desc': desc
  }, function(data, status) {
    alert(data);
  }, function(error) {
    alert(error);
  });
}
var initnum = 1;




function commitdata() {
  var contact = 'http://www.yujiahao.cn/sp/call/agent/';
  var mls = $('body').attr('id').value;
  var name = document.getElementById('contact-name').value;
  var tel = document.getElementById('contact-tel').value;
  var email = document.getElementById('contact-email').value;
  var desc = document.getElementById('contact-input').value;
  //	if(name.empty()) {
  //		new Toast({
  //			context: $('body'),
  //			message: '请输入姓名'
  //		}).show();
  //		return;
  //	}

  //联系经纪人
  $.post(contact, {
    'mls': 'r2177295',
    'agentid': agentid,
    'name': name,
    'tel': tel,
    'email': email,
    'desc': desc
  }, function(data, status) {
    alert(data);
  }, function(error) {
    alert(error);
  });
}
