$(".sport").hover(function(){
  if (this.id === 'b-Cross-Country'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/b-Cross-Country-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 0'
    })
  }
  if (this.id === 'g-Cross-Country'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/g-Cross-Country-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'Football'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/football-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'g-Golf'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/g-Golf-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 35%'
    })
  }
  if (this.id === 'g-Tennis'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/g-Tennis-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'g-Volleyball'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/g-Volleyball-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'b-Water-Polo'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/b-Water-Polo-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'Cheer'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-pictures/Cheer-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
});
