//var fallBannerRandom = Math.floor(Math.random() * 8)
//var fallBanner = []

$(".sport").hover(function(){
  //-----------------FALL---------------------
  if (this.id === 'b-Cross-Country'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/b-Cross-Country-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 0'
    })
  }
  if (this.id === 'g-Cross-Country'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/g-Cross-Country-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'Football'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/football-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'g-Golf'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/g-Golf-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 35%'
    })
  }
  if (this.id === 'g-Tennis'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/g-Tennis-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'g-Volleyball'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/g-Volleyball-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'b-Water-Polo'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/b-Water-Polo-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'Cheer'){
    $('#fallSlide').css({
      'background': 'url(Athletic-pictures/Cheer-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  //---------------WINTER------------------

});
