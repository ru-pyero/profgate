window.onload=function(){
  var zoom = 18;
  var center = [55.69338531385509,52.36547847807109];
  var marker_position = [55.69338531385509,52.36547847807109];
  var drag = true;
  
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
  if(isMobile.any()) {
    zoom = 17;
    center = [55.693394403776,52.365499935743195];
    marker_position = [55.693394403776,52.365499935743195];
    drag = false;
  }
  
  initMap(zoom, center, marker_position, drag);
}

function initMap(zoom,center, marker_position, drag) {
  ymaps.ready(function(){
    var map = new ymaps.Map("map", {
      center: center,
      zoom: zoom
    })
    
    var place = new ymaps.Placemark(
      marker_position, {
        hintContent: 'ProfGate',
        balloonContent: '<h4><span style="color:#00BE00;">ProfGate</span></h4><strong>Адрес:</strong> РТ, Набережные Челны<br><strong>Время работы:</strong> Пн-Сб.: 08:00-18:00, Вск.(выходной)<br><strong>Телефоны:</strong> +7 (917) 111-22-11,  +7 (917) 222-11-22<br><strong>Е-mail:</strong> profgate@gmail.com'
      },
      {
        iconImageHref: 'http://design-aura.ru/templates/profgate/img/locator.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -83],
        iconLayout: 'default#image',
        balloonShadow: true
      }
    );
		
    place.options.set('visible', true);
    map.geoObjects.add(place);
    map.behaviors.disable('scrollZoom');
    if(!drag){
      map.behaviors.disable('drag');
		}
    
    place.events.add('click', function (e) {
      e.get('target').options.set({iconImageHref: 'http://design-aura.ru/templates/profgate/img/locator.png'});
    });
  });
}
